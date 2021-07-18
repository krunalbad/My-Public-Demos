import React from 'react-native';
import { StyleSheet } from 'react-native';

const { Dimensions } = React;
let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: width,
    height: 250,
  },
});

export default styles;
