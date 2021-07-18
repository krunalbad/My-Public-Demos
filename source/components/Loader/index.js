import loaderHandler from 'react-native-busy-indicator/LoaderHandler';

/**
 * Custom loader component
 * @param {String} message message displays during loading state
 */
export const showLoader = (message = null) => {
  if (message !== null) {
    loaderHandler.showLoader(message);
  } else {
    loaderHandler.showLoader('Loading...');
  }
};

/**
 * hide loader component
 */
export const hideLoader = () => {
  loaderHandler.hideLoader();
};
