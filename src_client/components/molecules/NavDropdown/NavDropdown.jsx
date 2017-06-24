import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';


const NavDropdown = ({ itemsRoot, items: items, text }) => {
    let submenu = items.map(function (item) {
        return (
            <li key={item.name}>
                <NavLink to={`/${itemsRoot}/${item.path}`}>{item.name}</NavLink>
            </li>);
    });

    return (
        <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                {text}
                <span className="caret">{''}</span>
            </a>
            <ul className="dropdown-menu">
                {submenu}
            </ul>
        </li>
    );
};

NavDropdown.propTypes = {
    text: PropTypes.string.isRequired,
    itemsRoot: PropTypes.string.isRequired,
    items: PropTypes.array,
    location: PropTypes.object
};

export default withRouter(props => <NavDropdown {...props} />);