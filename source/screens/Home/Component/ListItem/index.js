import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Thumbnail } from 'native-base';
import styles from './styles';
import { get, isEmpty } from 'lodash';
import { goToPath } from '@navigation/store/actions';
import { routing } from '@navigation/store/constants';

const ListItem = props => {
  const { dataObj } = props;

  function onClickItem(id) {
    const { setUserId } = props;
    setUserId(id);
    goToPath(routing.USER_DETAIL);
  }

  if (!isEmpty(dataObj)) {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onClickItem(dataObj.id)}>
        <Thumbnail large source={{ uri: get(dataObj, 'avatar') }} />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.titleText}>{'FirstName:'}</Text>
            <Text style={styles.valueText}>{get(dataObj, 'first_name')}</Text>
          </View>
          <View>
            <Text style={styles.titleText}>{'LastName:'}</Text>
            <Text style={styles.valueText}>{get(dataObj, 'last_name')}</Text>
          </View>
        </View>
      </TouchableOpacity >
    );
  }
};

export default ListItem;
