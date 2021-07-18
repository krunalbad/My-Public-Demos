import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_AUTH_LOGIN_SUCCESS,
  SET_USER_PROFILE,
  SET_USER_EMAIL,
} from './constants';

// Initial state

const initialState = {
  accessToken: null,
  isLoggedIn: false,
  userEmail: '',
};

// Reducers

// const setUserEmail = (state, { type, payload }) => {
//   return { ...state, ...payload };
// };

const userLoginSuccess = (state, { type, payload }) => {
  return {
    ...state,
    ...{
      isLoggedIn: true,
      accessToken: payload.token,
      userEmail: payload.userEmail,
    },
  };
};

const userLogout = (state, { type }) => {
  return { ...state, ...initialState };
};

// const userAuthLoginSuccess = (state, { type, payload }) => {
//   const { userData } = payload;
//   return { ...state, ...{ authToken: userData.access_token, authTokenType: userData.token_type } };
// };

// const setUserProfileData = (state, { type, payload }) => {
//   return { ...state, ...{ userProfile: payload } };
// };

// Action handlers

const ACTION_HANDLERS = {
  [USER_LOGIN_SUCCESS]: (state, action) => userLoginSuccess(state, action),
  [USER_LOGOUT]: (state, action) => userLogout(state, action),
  // [USER_AUTH_LOGIN_SUCCESS]: (state, action) => userAuthLoginSuccess(state, action),
  // [SET_USER_PROFILE]: (state, action) => setUserProfileData(state, action),
  // [SET_USER_EMAIL]: (state, action) => setUserEmail(state, action),
};

// Hookup Reducers to type

export default function authReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
