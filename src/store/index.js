import { createStore,applyMiddleware,compose } from 'redux';
import { initialState } from './initialState';
import { rootReducer } from './rootReducer';
import thunkMiddleware from 'redux-thunk'

const data = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunkMiddleware),  window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default data;