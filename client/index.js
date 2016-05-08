import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers';
import { fromJS } from 'immutable';
import store from 'store';

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

window.__SERVER__ = false;


document.getElementsByTagName('body')[0].classList.add('is-client-rendered')

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
 * Render to the DOM
 */
render(
    <Provider store={store}>
      <Router children={routes} history={browserHistory} />
    </Provider>
  ,
  document.getElementById('app')
);

