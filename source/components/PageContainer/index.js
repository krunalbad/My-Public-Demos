import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container } from 'native-base';
// import { Actions } from 'react-native-router-flux';
// import { routing } from '@navigation/store/constants';
import { Colors } from '@themes';
import styles from './styles';

export default class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandscape: false,
      currentWidth: Dimensions.get('window').width,
      currentHeight: Dimensions.get('window').height,
    };
  }

  render() {
    const {
      children,
      hasDefaultNavBar = true,
      imageAsBackground = true,
      darkMode = false,
      appBackGround = false,
      isPlayerShow = false,
    } = this.props;

    const bgColor = { backgroundColor: Colors.black };
    return (
      <Container style={[styles.container, bgColor]}>{children}</Container>
    );
  }
}
