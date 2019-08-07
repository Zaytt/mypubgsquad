import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const makeStore = (initialState, options) =>
  createStore(rootReducer, initialState, compose(composeEnhancers(applyMiddleware(...middleware))));

export default makeStore;
