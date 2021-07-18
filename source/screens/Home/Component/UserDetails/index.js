import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Thumbnail, Text, Content } from 'native-base';
import { connect } from 'react-redux';
import { get, isEmpty } from 'lodash';
import Page from '@page';
import { getUser } from '@home/store/selector';
import styles from './styles';

class UserDetail extends Component {
  renderContent = () => {
    const { userObj } = this.props;
    if (isEmpty(userObj)) {
      return (
        <View style={styles.innerContainer}>
          <ActivityIndicator color={'white'} size={'large'} />
        </View>
      );
    } else {
      return (
        <View style={styles.innerContainer}>
          <Thumbnail large source={{ uri: get(userObj, 'avatar') }} />
          <Text style={styles.firstNameText}>
            <Text style={styles.titleText}>{'User ID: '}</Text>
            {get(userObj, 'id')}
          </Text>
          <Text style={styles.firstNameText}>
            <Text style={styles.titleText}>{'First Name: '}</Text>
            {get(userObj, 'first_name')}
          </Text>
          <Text style={styles.lastNameText}>
            <Text style={styles.titleText}>{'Last Name: '}</Text>
            {get(userObj, 'last_name')}
          </Text>
          <Text style={styles.emailText}>
            <Text style={styles.titleText}>{'Email: '}</Text>
            {get(userObj, 'email')}
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <Page>
        <Content style={styles.container}>{this.renderContent()}</Content>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  userObj: getUser(state),
});

export default connect(mapStateToProps, null)(UserDetail);
