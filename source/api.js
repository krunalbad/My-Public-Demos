import axios from 'axios';
import showToast from '@toast';
import { showLoader, hideLoader } from '@loader';
import { get, isEmpty } from 'lodash';

/**
 * You can create a new instance of axios with a custom config.
 */
const instance = axios.create({
  // baseURL: Config.SITECORE_URL,
  timeout: 10000,
  // headers: {
  //   // 'sc_apikey': Config.SITECORE_APIKEY
  // }
});

/**
 * Add a request interceptor
 */
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    showLoader();
    return config;
  },
  function (error) {
    // Do something with request error
    hideLoader();
    return Promise.reject(error);
  },
);

/**
 * Add a response interceptor
 */
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    hideLoader();
    return response;
  },
  function (error) {
    try {
      if (!isEmpty(error)) {
        const {
          response: { data, status, statusText },
          config,
        } = error;
        hideLoader();
        if (!isEmpty(data) && data.error) {
          const msg = get(data, 'error');
          showToast(msg, 'error');
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
      } else {
        hideLoader();
      }
      return Promise.reject(error);
    } catch (e) {
      hideLoader();
      console.log(e);
    }
  },
);

export default instance;
