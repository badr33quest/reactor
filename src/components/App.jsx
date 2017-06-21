import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  HomePage,
  EmployeesPage,
  DocumentsPage
} from 'app_pages';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/employees" component={EmployeesPage} />
    <Route path="/documents" component={DocumentsPage} />
  </Switch>
);

export default App;