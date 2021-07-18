import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListItem from '@home/Component/ListItem';

export default class UserList extends Component {
  render() {
    const { userData, setUserID } = this.props;
    return (
      <FlatList
        data={userData}
        renderItem={({ index, item }) => {
          return (
            <ListItem dataObj={item} index={index} setUserId={setUserID} />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
