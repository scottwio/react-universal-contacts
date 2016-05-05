import React from 'react';
import {Route} from 'react-router';
import {App} from 'components/App';
import {ListPersonView} from 'routes/listPerson/components/ListPersonView.js';
import {EditPersonView} from 'routes/editPerson/components/EditPersonView.js';

export default (
  <Route name="app" component={App} path="/">
      <Route component={ListPersonView} path="list" />
      <Route component={EditPersonView} path="edit/:id" />
  </Route>
);