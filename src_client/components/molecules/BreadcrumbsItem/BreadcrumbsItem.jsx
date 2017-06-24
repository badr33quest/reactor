import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ROUTES_NAMES = {
    '/': 'Home',
    '/grids': 'Grids',
    '/grids/react-bootstrap-table': 'react-bootstrap-table',
    '/grids/ag-grid': 'ag-grid',
    '/employees': 'Employees',
    '/employees/1': 'Employee 1',
    '/employees/2': 'Employee 2',
    '/documents': 'Documents'
};


const findRouteName = (url) => {
    return ROUTES_NAMES[url];
};

const BreadcrumbsItem = ({ match }) => {
    const routeName = findRouteName(match.path);

    if (routeName) {
        return (
            match.isExact ?
                (
                    <li className="active">{routeName}</li>
                ) :
                (
                    <li>
                        <Link to={match.path || ''}>
                            {routeName}
                        </Link>
                    </li>
                )
        );
    }
    return null;
};

BreadcrumbsItem.defaultProps = {
    match: null
};

BreadcrumbsItem.propTypes = {
    match: PropTypes.object
};

export default BreadcrumbsItem;