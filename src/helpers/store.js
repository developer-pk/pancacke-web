import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

const middleware = [thunk];
let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

let store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
