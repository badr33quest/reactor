import React from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from '../../molecules/NavItem/NavItem';

const Header = () => (
    <header>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <NavItem to="/" text="Home" />
                    <NavItem to="/employees/" text="Employees" />
                    <NavItem to="/documents/" text="Documents" />
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;