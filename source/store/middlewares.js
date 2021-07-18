import { Linking } from 'react-native';
import { OPEN_URL } from '@common/constants';

/**
 * Purpose of this middleware is to identify open url action and show them alert before app.
 */
export const openUrlMiddleware = store => next => action => {
  const data = action.payload;
  switch (action.type) {
    case OPEN_URL:
      if (data.url) {
        Linking.canOpenURL(data.url)
          .then(supported => {
            if (supported) {
              return Linking.openURL(data.url);
            }
          })
          .catch(err => { });
      }
      break;
    default:
  }
  next(action);
};
