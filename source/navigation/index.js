import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Scene,
  Router,
  ActionConst,
  Actions,
  Stack,
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import RNExitApp from 'react-native-exit-app';

import TabBar from '@tabBar';
import CustomNavBar from '@navigation/CustomNavBar';
import LoginComponent from '@login';
import HomeComponent from '@home';
import UserDetails from '@home/Component/UserDetails';
import { showAlert } from '@utils/helper';
import { routing } from '@navigation/store/constants';
import { Colors } from '@themes';

/**
 * define default style for all scene
 * @param {*} props Navigation Scene Renderer Props
 * @param {*} computedProps
 */
const getSceneStyle = (props, computedProps) => {
  const style = {
    backgroundColor: Colors.black,
  };
  return style;
};

const RouterWithRedux = connect()(Router);

export default class NavigationRouter extends Component {
  renderNull = () => {
    return <Text />;
  };

  onBackPress = () => {
    if (Actions.currentScene === routing.LOGIN) {
      showAlert(
        'Confirm',
        'Are you sure you want to exit?',
        'Yes',
        'No',
        onCancel => { },
        onConfirm => {
          if (onConfirm) {
            RNExitApp.exitApp();
          }
        },
      );
      return true;
    }
    Actions.pop();
    return true;
  };

  render() {
    return (
      <RouterWithRedux
        getSceneStyle={getSceneStyle}
        panHandlers={null}
        backAndroidHandler={() => this.onBackPress()}>
        <Scene key="app" navTransparent={true} navBar={CustomNavBar}>
          <Scene
            key={routing.LOGIN}
            title="Login"
            hideNavBar={true}
            component={LoginComponent}
            type={ActionConst.RESET}
          />
          <Scene
            key="drawerStack"
            hideNavBar={true}
            tabs={true}
            tabBarPosition="bottom"
            tabBarComponent={TabBar}
            headerMode="screen"
            hasTab={true}
            renderTitle={this.renderNull}
            default="home"
            renderLeftButton={this.renderNull}
            type={ActionConst.RESET}>
            <Stack key={routing.HOME}>
              <Scene
                key={`_${routing.HOME}`}
                title="Home"
                hasTabs={true}
                component={HomeComponent}
                type={ActionConst.RESET}
              />
              <Scene
                title={'User'}
                key={routing.USER_DETAIL}
                hasTabs={true}
                component={UserDetails}
              />
            </Stack>
          </Scene>
        </Scene>
      </RouterWithRedux >
    );
  }
}
