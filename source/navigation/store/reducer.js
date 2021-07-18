import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
  currentScene: {},
  previousScene: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      let currentScene = {};
      if (action.scene.sceneKey === 'drawer') {
        currentScene = state.currentScene;
      } else {
        currentScene = action.scene;
      }
      return {
        ...state,
        scene: action.scene,
        currentScene: currentScene,
        previousScene: state.scene,
      };

    // ...other actions

    default:
      return state;
  }
}
