import { combineReducers } from 'redux';
import toastReducer from './toastReducer';
import agentReducer from './agentReducer';
import loaderReducer from './loaderReducer';
import productReducer from './productReducer';

export default combineReducers({
  agentReducer,
  loaderReducer,
  toastReducer,
  productReducer
});
