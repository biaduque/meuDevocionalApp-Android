import ActionTypes from './action-types';

const setMyDevotionals = payload => {
  return {
    type: ActionTypes.myDevotionals.SET_MY_DEVOTIONALS,
    payload,
  };
};

export {setMyDevotionals};
