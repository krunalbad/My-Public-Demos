import React, { Component } from 'react';
import { Text } from 'react-native';
import { FooterTab, Button, Footer } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DeviceUiInfo from '@utils/deviceUiInfo';
import { Colors, Metrics } from '@themes';
import { styles } from './styles';

const { paddings } = Metrics;
const { white, lightModeBackGround } = Colors;

const Tabs = [
  {
    name: 'Home',
    key: 'home',
    icon: 'Home',
  },
];

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabHeaderColor: [],
    };
  }

  handleOnPress = key => {
    Actions[`_${key}`]();
  };

  renderTab = Tabs => {
    const { navigation } = this.props;
    return Tabs.map((tab, index) => {
      const { key, name } = tab;
      let tabColor = lightModeBackGround;
      if (
        navigation &&
        navigation.state &&
        navigation.state.routeName === 'drawerStack' &&
        index === navigation.state.index
      ) {
        tabColor = white;
      }
      return (
        <Button
          style={paddings.pB0}
          key={key}
          vertical
          onPress={() => this.handleOnPress(key)}>
          <Text style={[styles.titleText, { color: tabColor }]}>{name}</Text>
        </Button>
      );
    });
  };

  render() {
    return (
      <Footer style={styles.tabContainer}>
        <FooterTab style={[styles.tab]}>{this.renderTab(Tabs)}</FooterTab>
      </Footer>
    );
  }
}


export default connect(null, null)(TabBar);
