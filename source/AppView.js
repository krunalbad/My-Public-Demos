import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { StyleProvider, Text as NBText } from 'native-base';
import { connect } from 'react-redux';
import BusyIndicator from 'react-native-busy-indicator';
import SplashScreen from 'react-native-splash-screen';

import NavigationRouter from '@navigation';
import { resetPath } from '@navigation/store/actions';
import { routing } from '@navigation/store/constants';
import getTheme from '@native-base-theme/components';
import material from '@native-base-theme/variables/material';
// import { getUserProfileRequest } from '@auth/store/actions';
// import { Colors } from '@themes';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
NBText.defaultProps = NBText.defaultProps || {};
NBText.defaultProps.allowFontScaling = false;

class AppView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { isLoggedIn, resetPath } = this.props;
    setTimeout(() => {
      if (isLoggedIn) {
        resetPath(routing.DRAWER_STACK);
      }
    }, 1000);
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <NavigationRouter />
          <StatusBar hidden={false} />
          <BusyIndicator />
        </View>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

function mapDispatchToProps(dispatch) {
  return {
    resetPath: function (path, param) {
      resetPath(path, param);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
