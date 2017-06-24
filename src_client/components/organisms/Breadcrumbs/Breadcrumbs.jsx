import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, Route } from 'react-router-dom';

import {
  BreadcrumbsBase
} from 'app_molecules';


const Breadcrumbs = (props) => {

  return (
    <div className="container-fluid">
      <Route path="/:path" component={BreadcrumbsBase} {...props} />
    </div>
  );
};

Breadcrumbs.defaultProps = {
  location: null
};

Breadcrumbs.propTypes = {
  location: PropTypes.object
};

export default withRouter(Breadcrumbs);
