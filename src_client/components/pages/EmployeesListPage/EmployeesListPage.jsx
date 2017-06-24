import React from 'react';

import {
    PageTemplate
} from 'app_templates';

import {
    EmployeesListContainer
} from 'app_containers';

class EmployeesListPage extends React.Component {
    render() {
        return (
            <div>
                <PageTemplate
                    title="EmployeesListPage"
                    description="EmployeesListPage description"
                >
                    <EmployeesListContainer />
                </PageTemplate> 
            </div>
        );
    }
}

export default EmployeesListPage;