import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'routes';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers';
import { fromJS } from 'immutable';

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * inital state passed by the server
 */
let initialState = window.__INITIAL_STATE__;


/**
 * Transform into Immutable.js collections,
 * but leave top level keys untouched for Redux
 **/
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });
  
/**
 * Create all the stores for redux 
 */

const reducer = combineReducers(reducers);
const store = applyMiddleware(thunk)(createStore)(reducer);

/**
 * We would like HTML5 push state URLS
 * not hashs these would be createHashHistory
 */
const history = createBrowserHistory();

/**
 * Render to the DOM
 */
render(
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>
  ,
  document.getElementById('app')
);

