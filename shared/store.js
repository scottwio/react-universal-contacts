import * as reducers from 'reducers';
import thunk from 'redux-thunk';
import { createStore, combineReducers } from 'redux';
const applyMiddleware = __SERVER__ ?
  require('redux-universal') :
  require('redux').applyMiddleware;
 
  /**
   * Redux bring in reducers and stores
   */
  const reducer = combineReducers(reducers);
  const createStoreWithMiddlewares = applyMiddleware(thunk)(createStore);
  
  function configureStore(initialState = {}) {
    return createStoreWithMiddlewares(reducer, initialState);
  }
  
const store = configureStore();

export default store;