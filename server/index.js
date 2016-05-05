// libs
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RoutingContext, match} from 'react-router';
import createLocation from 'history/lib/createLocation';

// redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// ours
import fetchComponentData from 'lib/fetchComponentData';
import routes from 'routes';
import * as reducers from 'reducers';

import api from './api';
 
const app = express();

app.use('/api/', api);

app.use('/assets', express.static('shared/assets'));

/**
 * Render our response
 */

app.use((req, res) => {

  const location = createLocation(req.url);

  /**
   * Redux bring in reducers and stores
   */
  const reducer = combineReducers(reducers);
  const store = createStore(reducer);

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
    if (!renderProps) return res.status(404).end('Not found');

    function renderView() {
      /**
       * Contiune on if everything is good render the page
       * and being in the routing context from react-router
       * pass along renderProps
       *
       * <Provider> is from redux this injects our stores through
       * the component tree
       */
      const initialState = store.getState();

      /**
       * Use react-router to render the correct router
       * and spread out our router props into the route
       */
      const InitialComponent = (
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );

      const componentHTML = renderToString(InitialComponent);
      const HTML = `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Isomorphic Redux Demo</title>
          </head>
          <body>
            <div id="app">${componentHTML}</div>
          </body>
          <script type="application/javascript">
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
          <script type="application/javascript" src="/bundle.js"></script>
      </html>`

      return HTML;
    };

    /**
    * The script tag gives us access to the
    * state on the client under window.__INITIAL_STATE__
    * here we fetch the data needed for each of the components 
    * that we are rendering and then we send the resulting data
    * to express for it to render
    */
    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.end(html))
      .catch(err => res.end(err.message));
      
  });
});

export default app;