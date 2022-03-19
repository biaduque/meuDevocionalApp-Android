import ActionTypes from './action-types';

const setMyDevotionals = payload => {
  return {
    type: ActionTypes.myDevotionals.SET_MY_DEVOTIONALS,
    payload,
  };
};

const setMural = payload => {
  return {
    type: ActionTypes.myDevotionals.SET_MURAL,
    payload,
  };
};

const setHandleModalDeleteDevocional = payload => {
  return {
    type: ActionTypes.myDevotionals.SET_OPEN_MODAL_DELETE_DEVOTIONAL,
    payload,
  };
};

const setSelectedDevotional = payload => {
  return {
    type: ActionTypes.myDevotionals.SET_SELECTED_DEVOTIONAl,
    payload,
  };
};

export {
  setMyDevotionals,
  setMural,
  setHandleModalDeleteDevocional,
  setSelectedDevotional,
};
