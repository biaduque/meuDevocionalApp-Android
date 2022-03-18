import ActionTypes from '../actions/action-types';

const INITIAL_STATE = {
  devotionals: [],
  mural: [],
  openModalDeleteDevocional: false,
  selectedDevocional: null,
};

const myDevotionalsReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ActionTypes.myDevotionals.SET_MY_DEVOTIONALS:
      return {
        ...state,
        devotionals: payload,
      };
    case ActionTypes.myDevotionals.SET_MURAL:
      return {
        ...state,
        mural: payload,
      };
    case ActionTypes.myDevotionals.SET_OPEN_MODAL_DELETE_DEVOTIONAL:
      return {
        ...state,
        openModalDeleteDevocional: payload,
      };
    case ActionTypes.myDevotionals.SET_SELECTED_DEVOTIONAl:
      return {
        ...state,
        selectedDevocional: payload,
      };
    default:
      return state;
  }
};

export {myDevotionalsReducer};
