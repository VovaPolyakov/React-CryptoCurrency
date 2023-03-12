import { createStore,applyMiddleware,compose } from 'redux';
import { initialState } from './initialState';
import { rootReducer } from './rootReducer';

import {getDataMiddleWares} from './middlewares'

const middlewares = [getDataMiddleWares]

const data = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default data;