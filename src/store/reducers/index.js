import {combineReducers} from 'redux';
import {appReducer} from './app.reducer';
import {myDevotionalsReducer} from './mydevotionals.reducer';

export default combineReducers({
  app: appReducer,
  myDevotionals: myDevotionalsReducer,
});
