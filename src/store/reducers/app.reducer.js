import ActionTypes from '../actions/action-types';
import {light, dark} from '../../styles/themes';

const INITIAL_STATE = {
  activeTab: 'Leitura',
  theme: dark,
};

const appReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ActionTypes.app.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: payload,
      };
    case ActionTypes.app.SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export {appReducer};
