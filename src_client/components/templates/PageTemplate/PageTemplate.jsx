import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Header,
    Main 
 } from 'app_organisms';

const PageTemplate = (props) => (
    <div>
        <Header />
        <Main {...props} />
    </div>
);

export default PageTemplate;