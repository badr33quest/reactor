import React from 'react';

import {
    PageTemplate
 } from 'app_templates';
 
class HomePage extends React.Component {
    render() {
        return <PageTemplate
            title="HomePage, hello"
            description="HomePage description"
        />;
    }
}

export default HomePage;