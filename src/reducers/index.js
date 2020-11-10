import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tokeReducer from './tokeReducer';

export default combineReducers({
  tokes: tokeReducer,
  auth: authReducer,
});
