import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../organisms/Header/Header';
import Main from '../../organisms/Main/Main';

const PageTemplate = (props) => (
    <div>
        <Header />
        <Main {...props} />
    </div>
);

export default PageTemplate;