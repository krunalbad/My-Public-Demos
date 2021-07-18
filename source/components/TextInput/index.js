import React, { Component, PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Text, Input, Icon, View, Label } from 'native-base';
import { connect } from 'react-redux';
import { toUpper } from 'lodash';
import { Colors, Metrics, Fonts } from '@themes';

const { paddings, margins } = Metrics;
const { size } = Fonts;

const styles = StyleSheet.create({
  input: {
    color: Colors.black,
    // fontFamily: fontType.Medium,
    fontSize: size.h16
  },
  errorMsgContainer: {
    width: '100%',
    ...{ ...paddings.pT5 },
    ...{ ...paddings.pL5 },
  },
  errorMsg: {
    color: Colors.errorText,
    fontSize: size.h14,
  },
});

class TextField extends PureComponent {
  render() {
    const {
      inputOptions,
      inputStyle = {},
      leftIconStyle = {},
      onPressRightIcon = () => { },
      leftIcon,
      errorStyle = {},
      containerStyle = {},
      errorMsgContainerStyle = {},
      rightIcon,
      rightIconStyle = {},
      placeholderTextColor = Colors.black,
      label,
      labelStyle = {},
      inputContainerStyle = {},
      input,
      meta,
    } = this.props;
    const { touched, error, invalid } = meta;
    const { onChange, value } = input;
    let hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    const getLeftIcon = () => {
      if (leftIcon && leftIcon.type) {
        return (
          <Icon
            name={leftIcon.name}
            style={leftIconStyle}
            type={leftIcon.type}
          />
        );
      }
      return null;
    };
    return (
      <View style={containerStyle}>
        {label && <Label style={labelStyle}>{toUpper(label)}</Label>}
        <Item
          style={[
            inputOptions.showItemLine
              ? { borderBottomWidth: 1 }
              : { borderBottomWidth: 0 },
            inputContainerStyle,
          ]}>
          {leftIcon && (
            <View style={[paddings.pL5, leftIconStyle]}>{getLeftIcon()}</View>
          )}
          <Input
            style={inputStyle}
            returnKeyType="next"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor={Colors.placeholderText}
            onChangeText={onChange}
            defaultValue={value}
            blurOnSubmit={true}
            // onChangeText={input.onchange}
            // value={input.value}
            {...inputOptions}
          />
        </Item>
        {hasError && touched && (
          <View style={[styles.errorMsgContainer, errorMsgContainerStyle]}>
            <Text style={[styles.errorMsg, errorStyle]}>{meta.error}</Text>
          </View>
        )}
      </View>
    );
  }
}

export default connect(
  null,
  null,
)(TextField);
