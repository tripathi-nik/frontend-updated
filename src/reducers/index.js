import { combineReducers } from 'redux';

import agentReducer from './agentReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
  agentReducer,
  loaderReducer,
});
