import React from 'react';

import  Demo  from './official-demo/demo';
import {
    PageTemplate
} from 'app_templates';


class ReactBootstrapTablePage extends React.Component {
    render() {
        return (
            <PageTemplate
                title="ReactBootstrapTablePage"
                description="ReactBootstrapTablePage description"
            >
                <Demo />
            </PageTemplate>
        );
    }
}

export default ReactBootstrapTablePage;