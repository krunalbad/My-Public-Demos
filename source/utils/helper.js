import { Alert, Linking } from 'react-native';
// import showToast from '@toast';
import { CHECK_URL_REGEX, URL_REGEX } from './constants';

export const showAlert = (
  title,
  message,
  okTitle = 'Yes',
  noTitle = 'Cancel',
  noCallback,
  callback,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: noCallback ? noTitle : null,
        onPress: () => (callback ? noCallback(true) : null),
      },
      {
        text: noCallback ? okTitle : 'OK',
        onPress: () => (callback ? callback(true) : null),
      },
    ],
    { cancelable: false },
  );
};

export const showOkAlert = (title, message, callback, okTitle = 'OK') => {
  Alert.alert(
    title,
    message,
    [{ text: okTitle, onPress: () => (callback ? callback(true) : null) }],
    {
      cancelable: false,
    },
  );
};

export const openLink = url => {
  if (url !== '') {
    if (!URL_REGEX.test(url)) {
      url = `http://${url}`;
    }
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url).catch(() => {
            // showToast('An error occurred to open URL', 'error');
          });
        }
      })
      .catch(() => {
        // showToast('An error occurred to open URL', 'error');
      });
  } else {
    // return showToast('An error occurred to open URL or Invalid URL', 'error');
  }
};

export const isValidUrl = urlStr => {
  return CHECK_URL_REGEX.test(urlStr);
};
