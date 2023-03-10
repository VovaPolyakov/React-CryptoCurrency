import { createStore,applyMiddleware,compose } from 'redux';
import { initialState } from './initialState';
import { rootReducer } from './rootReducer';


const data = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default data;