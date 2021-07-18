import { createSelector } from 'reselect';

export const getCurrentScene = state => state.routes.scene;

export const getDrawerStatus = createSelector(
  [getCurrentScene],
  currentScene => {
    if (currentScene.sceneKey === 'drawer') {
      return currentScene.open;
    }
    return false;
  },
);

export const getFooterStatus = createSelector(
  [getCurrentScene],
  currentScene => !currentScene.hideNavBar,
);
