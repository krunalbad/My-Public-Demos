import { OPEN_URL, SET_SCENE_NAME } from '@common/constants';

export function openUrl(data) {
  return {
    type: OPEN_URL,
    payload: data,
  };
}

export function setSceneName(params) {
  return {
    type: SET_SCENE_NAME,
    payload: params,
  };
}
