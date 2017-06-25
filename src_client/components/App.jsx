import React from 'react';
import { Route, Switch } from 'react-router-dom';

/*if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}*/

import {
  HomePage,
  EmployeesListPage,
  EmployeePage,
  DocumentsPage,
  GridsListPage,
  ReactBootstrapTablePage,
  DevExtremeReactGridPage,
  NotFoundPage
} from 'app_pages';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/employees" component={EmployeesListPage} />
    <Route exact path="/employees/:id" component={EmployeePage} />
    <Route path="/documents" component={DocumentsPage} />
    <Route exact path="/grids" component={GridsListPage} />
    <Route exact path="/grids/react-bootstrap-table" component={ReactBootstrapTablePage} />
    <Route exact path="/grids/devextreme-react-grid" component={DevExtremeReactGridPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default App;