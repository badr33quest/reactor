import React from 'react';

import {
    PageTemplate
} from 'app_templates';

import {
    EmployeesListContainer
} from 'app_containers';

class EmployeesPage extends React.Component {
    render() {
        return (
            <div>
                <PageTemplate
                    title="EmployeesPage, hello"
                    description="EmployeesPage description"
                />
                <EmployeesListContainer />
            </div>
        );
    }
}

export default EmployeesPage;