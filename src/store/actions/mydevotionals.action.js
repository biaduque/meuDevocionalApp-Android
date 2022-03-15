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

export {setMyDevotionals, setMural};
