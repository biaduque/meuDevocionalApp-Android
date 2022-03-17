import ActionTypes from '../actions/action-types';
import {light, dark} from '../../styles/themes';
import {Animated, Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();

const INITIAL_STATE = {
  activeTab: 'Leituras',
  theme: colorScheme === 'dark' ? dark : light,
  offset: new Animated.Value(0),
  isLoaded: false,
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
    case ActionTypes.app.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: payload,
      };
    case ActionTypes.app.SET_OFFSET:
      return {
        ...state,
        offset: payload,
      };

    default:
      return state;
  }
};

export {appReducer};
