import React from 'react';

import {
    PageTemplate
 } from 'app_templates';

class NotFoundPage extends React.Component {
    render() {
        return <PageTemplate
            title="404 (Page not found)"
        />;
    }
}

export default NotFoundPage;