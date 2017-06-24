import './Header.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    NavItem,
    NavDropdown
} from 'app_molecules';


const GRID_ROUTES = [
    {name: 'react-bootstrap-table', path: 'react-bootstrap-table'},
    {name: 'ag-grid', path: 'ag-grid'},
];

const Header = () => (
    <header>
        <nav className="navbar navbar-default page-navbar">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <NavItem to="/" text="Home" />
                    <NavItem to="/employees/" text="Employees" />
                    <NavItem to="/documents/" text="Documents" />
                    <NavDropdown text="Grids" itemsRoot="grids" items={GRID_ROUTES}/>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;