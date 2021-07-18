import Toast from 'react-native-root-toast';

import { Colors } from '@themes';

/**
 * Custom toast component
 * @param {String} message message to display as a toast
 * @param {String} type Toast type enums ['error']
 */
const showToast = (message = '', type) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor:
      type === 'error' ? Colors.errorText : Colors.controlBarLight,
  });
};

export default showToast;
