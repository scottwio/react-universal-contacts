
// libs
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import createLocation from 'history/lib/createLocation';

// redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import applyMiddleware from 'redux-universal';

// ours
import routes from 'routes';
import api from './api';
import bodyParser from 'body-parser';

import store from 'store.js'

const app = express();

/**
 * For reading content returned in body
 * of a request 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Hook up our fake API
 */
app.use('/api/', api);

/**
 * Serve some static assets
 */
app.use('/assets', express.static('shared/assets'));

/**
 * Redirect / to list
 */
app.get('/', (req, res) => {
  res.redirect('/list');
});

/**
 * Render our response using react
 */
app.use((req, res) => {

  const location = createLocation(req.url);



  /**
   * User react-router to match the current
   * location to out react-router location
   */
  match({ routes, location }, (err, redirectLocation, renderProps) => {

    // 500 if error
    if (err) {
      console.log(err);
      return res.status(500).end('Internal server error');
    }

    // 404 if not found
    if (!renderProps) {
      return res.status(404).end('Not found');
    }
    
    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );
    
    function renderHtml(html, initialState) {
      return `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Person editor</title>
              <script type="application/javascript" src="/styles.js"></script>
            </head>
            <body>
              <div id="app">
              <div>
              ${html}
              </div>
              </div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            </script>
            <script type="application/javascript" src="/bundle.js"></script>
          </body>
        </html>`;
    }
      
    store.renderUniversal(renderToString, InitialComponent)
      .then(({ output }) => {
        const state = store.getState();
        res.send(renderHtml(output, state));
      })
      .catch(({ output, error }) => {
        const state = store.getState();
        res.send(renderHtml(output, state));
      });

  });
});

export default app;