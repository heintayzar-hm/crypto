import { combineReducers } from 'redux';
import crypto from './crypto/crypto';

const rootReducer = combineReducers({
  crypto,
});

export default rootReducer;
