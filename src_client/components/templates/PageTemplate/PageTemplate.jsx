import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Header,
    Main,
    Breadcrumbs
 } from 'app_organisms';

const PageTemplate = (props) => (
    <div>
        <Header />
        <Breadcrumbs />
        <Main {...props} />
    </div>
);

export default PageTemplate;