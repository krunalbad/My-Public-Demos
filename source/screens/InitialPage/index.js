import React, { Component } from 'react';
import { Container, View } from 'native-base';

import styles from './styles';

export default class InitialPage extends Component {
  render() {
    return (
      <Container>
        <View style={styles.bg} />
      </Container>
    );
  }
}
