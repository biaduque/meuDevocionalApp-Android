import ActionTypes from './action-types';

const setActiveTab = product => {
  return {
    type: ActionTypes.app.SET_ACTIVE_TAB,
    payload: product,
  };
};

const setTheme = payload => {
  return {
    type: ActionTypes.app.SET_THEME,
    payload,
  };
};

export {setActiveTab, setTheme};
