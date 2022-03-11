import ActionTypes from '../actions/action-types';

const INITIAL_STATE = {
  devotionals: [],
};

const myDevotionalsReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ActionTypes.myDevotionals.SET_MY_DEVOTIONALS:
      return {
        ...state,
        devotionals: payload,
      };
    default:
      return state;
  }
};

export {myDevotionalsReducer};
