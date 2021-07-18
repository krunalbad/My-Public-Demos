import React, { Component } from 'react';
import { Content,Container } from 'native-base';
import Page from '@page';
import UserList from '@home/Component/UserList';

export default class HomeComponent extends Component {
  componentDidMount() {
    const { getUsersList } = this.props;
    getUsersList();
  }

  componentWillUnmount() {
    const { resetUserList } = this.props;
    resetUserList([]);
  }

  render() {
    const { usersList, setUserID } = this.props;
    return (
      <Page>
          <UserList userData={usersList} setUserID={setUserID} />
      </Page>
    );
  }
}
