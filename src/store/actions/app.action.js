import ActionTypes from './action-types';

const setActiveTab = tab => {
  return {
    type: ActionTypes.app.SET_ACTIVE_TAB,
    payload: tab,
  };
};

const setTheme = payload => {
  return {
    type: ActionTypes.app.SET_THEME,
    payload,
  };
};

const setOffset = payload => {
  return {
    type: ActionTypes.app.SET_OFFSET,
    payload,
  };
};

const setIsLoaded = payload => {
  return {
    type: ActionTypes.app.SET_IS_LOADED,
    payload,
  };
};

export {setActiveTab, setTheme, setOffset, setIsLoaded};
