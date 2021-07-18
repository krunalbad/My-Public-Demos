import { get, isEmpty } from 'lodash';
import { getUserLoginRequestApi } from './api';
import { USER_LOGOUT, USER_LOGIN_SUCCESS } from './constants';
import { routing } from '@navigation/store/constants';
import { resetPath } from '@navigation/store/actions';

export const getUserLoginRequest = dataObj => dispatch => {
  getUserLoginRequestApi(dataObj)
    .then(response => {
      if (!isEmpty(response) && response.data) {
        const res = response.data;
        const userData = {
          userEmail: get(dataObj, 'email'),
          token: get(res, 'token'),
        };
        dispatch(userLoginSuccess(userData));
        dispatch(resetPath(routing.DRAWER_STACK));
      }
    })
    .catch(err => { });
};

export function userLoginSuccess(data) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
