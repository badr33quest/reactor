import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

class NavItem extends Component {

    render() {
        let isActive = (this.props.to === this.props.location.pathname);

        return (
            <li className={isActive ? 'active' : ''}>
                <NavLink to={this.props.to}>{this.props.text}</NavLink>
            </li>
        );
    }

}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string
    })
};

export default withRouter(props => <NavItem {...props} />);