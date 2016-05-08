import React from 'react';
import {Route, Redirect} from 'react-router';
import {App} from 'components/App';
import {ListPersonView} from 'routes/listPerson/components/ListPersonView';
import {EditPersonView} from 'routes/editPerson/components/EditPersonView';
import NotFoundView from 'routes/notFound/components/NotFoundView'

export default (
  <Route name="app" component={App} path="/">
      <Route component={ListPersonView} path="list"/>
      <Route component={EditPersonView} path="edit/:id"/>
      <Redirect from="/" to="list" />
      <Route component={NotFoundView} path="*" />
  </Route>
  
);