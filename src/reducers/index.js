import { combineReducers } from 'redux';
import toastReducer from './toastReducer';
import agentReducer from './agentReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
  agentReducer,
  loaderReducer,
  toastReducer
});
