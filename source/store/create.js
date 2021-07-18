import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';

import * as reducers from '@store/reducers';
import { openUrlMiddleware } from '@store/middlewares';

const config = {
  key: 'root',
  storage: AsyncStorage,
};
const reducer = persistCombineReducers(config, { ...reducers });

const composeEnhancers = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunkMiddleware, openUrlMiddleware),
);

export default function configureStore(storeReady, initialState) {
  const store = createStore(reducer, initialState, enhancer);

  persistStore(store, null, () => {
    storeReady(store);
  });
  return store;
}
