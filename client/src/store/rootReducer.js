import { combineReducers } from 'redux';

import { cryptoReducer} from '../ducks/crypto/reducer';

export const rootReducer = combineReducers({
  crypto: cryptoReducer,
});