import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import DocumentsPage from './pages/DocumentsPage/DocumentsPage';

const App = () => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/employees" component={EmployeesPage}/>
      <Route path="/documents" component={DocumentsPage}/>
    </Switch>
);

export default App;