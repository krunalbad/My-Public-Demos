import { Actions, ActionConst } from 'react-native-router-flux';

export function goToPath(path, params) {
  return Actions[path]({ type: ActionConst.PUSH, ...params });
}

export function replacePath(path, params) {
  return Actions[path]({ type: ActionConst.REPLACE, ...params });
}

export function resetPath(path, params) {
  return Actions[path]({ type: ActionConst.RESET, ...params });
}

export function goToBack(params) {
  Actions.pop(params);
}
