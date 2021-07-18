import React, { Component } from 'react';
import { View } from 'react-native';
import { Content } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { isEmpty } from 'lodash';
import { required, email, combine } from 'redux-form-validators';

import Page from '@page';
import TextField from '@textInput';
import ActionButton from '@actionButton';
import { routing } from '@navigation/store/constants';
import {
  EMAIL_REQUIRED,
  INVALID_EMAIL,
  PASSWORD_REQUIRED,
} from '@utils/constants';
import { Metrics } from '@themes';
import { styles } from './styles';
const { margins } = Metrics;

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.props.reset();
    this.inputs = [];
    this.renderInput = this.renderInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
  }

  componentDidMount() {
    const { initialize } = this.props;
    const values = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    };
    initialize(values);
  }

  setInputRef = (inputRef, key) => {
    this.inputs[key] = inputRef;
  };
  focusNextField = key => {
    this.inputs[key]._root.focus();
  };

  submitForm(values) {
    if (!isEmpty(values)) {
      const { getUserLoginRequest } = this.props;
      getUserLoginRequest(values);
    }
  }

  renderInput(props) {
    return <TextField {...props} />;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Page key="login" imageAsBackground={true}>
        <Content contentContainerStyle={styles.container}>
          <Field
            name="email"
            type="email"
            component={this.renderInput}
            validate={combine(
              required({ msg: EMAIL_REQUIRED }),
              email({ msg: INVALID_EMAIL }),
            )}
            inputOptions={{
              placeholder: 'email@domain.com',
              keyboardType: 'email-address',
              autoCapitalize: 'none',
              ref: ref => this.setInputRef(ref, 'email'),
              returnKeyType: 'default',
            }}
            containerStyle={styles.inputContainer}
            errorStyle={styles.errorText}
            errorMsgContainerStyle={styles.errorMessageContainer}
            inputContainerStyle={styles.textInputContainer}
            inputStyle={styles.textInput}
            label={'Email'}
            labelStyle={styles.labelStyle}
          />
          <Field
            name="password"
            type="password"
            component={this.renderInput}
            validate={combine(required({ msg: PASSWORD_REQUIRED }))}
            inputOptions={{
              placeholder: 'password',
              secureTextEntry: true,
              autoCapitalize: 'none',
              ref: ref => this.setInputRef(ref, 'password'),
              returnKeyType: 'default',
            }}
            containerStyle={[styles.inputContainer, margins.mT15]}
            errorStyle={styles.errorText}
            errorMsgContainerStyle={styles.errorMessageContainer}
            inputContainerStyle={styles.textInputContainer}
            inputStyle={styles.textInput}
            label={'Password'}
            labelStyle={styles.labelStyle}
          />
          <ActionButton
            text={'Login'}
            textStyle={styles.nextButtonText}
            buttonStyle={styles.nextButtonContainer}
            onPress={handleSubmit(this.submitForm)}
          />
        </Content>
      </Page >
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
  // validate,
})(LoginComponent);
