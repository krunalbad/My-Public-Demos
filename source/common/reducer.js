import { SET_SCENE_NAME } from '@common/constants';

/**
 * Initial state
 */
const initialState = {
  sceneName: '',
};

/**
 * Reducer
 * @param {*} state
 * @param {*} action
 */

const setSceneName = (state, { type, payload }) => {
  return { ...state, ...{ sceneName: payload } };
}

/**
 * Action Handlers
 */
const ACTION_HANDLERS = {
  [SET_SCENE_NAME]: (state, action) => setSceneName(state, action),
};

/**
 * Hookup Reducers To Types
 * @param {*} state
 * @param {*} action
 */
export default function commonReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
