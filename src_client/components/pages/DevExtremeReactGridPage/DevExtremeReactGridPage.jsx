import React from 'react';

import {
    PageTemplate
} from 'app_templates';

import UncontrolledModeDemo from './UncontrolledModeDemo.jsx';


class DevExtremeReactGridPage extends React.Component {
    render() {
        return (
            <PageTemplate
                title="DevExtremeReactGridPage"
                description="DevExtremeReactGridPage description"
            >
                <UncontrolledModeDemo />
            </PageTemplate>
        );
    }
}



export default DevExtremeReactGridPage;