import { RESET_USER_LIST, SET_USER_ID, USER_LIST_SUCCESS } from './constants';

// Initial state

const initialState = {
  usersList: [],
  userId: 0,
};

const userListSuccess = (state, { type, payload }) => {
  return {
    ...state,
    ...{
      usersList: payload.users,
    },
  };
};

const resetUserList = (state, { type, payload }) => {
  return { ...state, ...{ usersList: [], userId: 0 } };
};

const setUserID = (state, { type, payload }) => {
  return { ...state, ...{ userId: payload } };
};

// Action handlers

const ACTION_HANDLERS = {
  [USER_LIST_SUCCESS]: (state, action) => userListSuccess(state, action),
  [RESET_USER_LIST]: (state, action) => resetUserList(state, action),
  [SET_USER_ID]: (state, action) => setUserID(state, action),
};

// Hookup Reducers to type

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
