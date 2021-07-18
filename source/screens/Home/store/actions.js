import { isEmpty } from 'lodash';
import { getUserListRequestApi } from './api';
import { USER_LIST_SUCCESS, RESET_USER_LIST, SET_USER_ID } from './constants';

export const getUsersList = () => dispatch => {
  getUserListRequestApi()
    .then(response => {
      if (
        !isEmpty(response) &&
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data)
      ) {
        dispatch(userListSuccess({ users: response.data.data }));
      }
    })
    .catch(error => { });
};

export function userListSuccess(data) {
  return {
    type: USER_LIST_SUCCESS,
    payload: data,
  };
}

export function resetUserList(data) {
  return {
    type: RESET_USER_LIST,
    payload: data,
  };
}

export function setUserID(data) {
  return {
    type: SET_USER_ID,
    payload: data,
  };
}
