/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import InitialPage from '@initialPage';
import AppView from './AppView';
import createStore from '@store/create';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

class App extends Component {
  constructor() {
    super();
    this.state = {
      store: null,
    };
  }

  UNSAFE_componentWillMount() {
    createStore((store) => {
      this.setState({ store });
    });
  }

  render() {
    const { store } = this.state;
    if (!store) {
      return <InitialPage />;
    }

    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}

export default App;
