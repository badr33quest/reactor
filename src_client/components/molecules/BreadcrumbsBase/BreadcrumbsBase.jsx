import './BreadcrumbsBase.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { BreadcrumbsItem } from 'app_molecules';


const getPaths = (pathname) => {
    const paths = ['/'];
    const arr = pathname.split('/');

    arr.reduce((prev, curr, index) => {
        const currPath = `${prev}/${curr}`;

        if (currPath !== `${prev}/` && arr.length > 1)
            paths.push(currPath);

        return currPath;
    });

    return paths;
};

const BreadcrumbsBase = ({ ...rest, location: { pathname } }) => {
    const paths = getPaths(pathname);

    return (
        <ol className="breadcrumb page-breadcrumbs">
            {paths.map(p => <Route {...rest} key={p} path={p} component={BreadcrumbsItem} />)}
        </ol>
    );
};

BreadcrumbsBase.defaultProps = {
    location: null,
};

BreadcrumbsBase.propTypes = {
    location: PropTypes.object,
};

export default BreadcrumbsBase;