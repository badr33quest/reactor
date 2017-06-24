import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import {
    PageTemplate
} from 'app_templates';


class GridsListPage extends React.Component {
    render() {
        return (

            <PageTemplate
                title="GridsListPage"
                description="GridsListPage description"
            >
                <ul>
                    <li>
                        <NavLink to="/grids/react-bootstrap-table">react-bootstrap-table</NavLink>
                    </li>
                    <li>
                        <NavLink to="/grids/ag-grid">ag-grid</NavLink>
                    </li>
                </ul>
            </PageTemplate>

        );
    }
}

export default GridsListPage;