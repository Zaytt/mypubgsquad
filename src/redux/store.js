import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    compose(composeEnhancers(applyMiddleware(...middleware)))
  );
};
