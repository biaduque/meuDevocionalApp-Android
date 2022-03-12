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

export {setActiveTab, setTheme};
