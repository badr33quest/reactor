import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { itemsFetchData } from 'app_actions/items';

class EmployeesListContainer extends Component {

    componentWillMount() {
        this.props.fetchData('api/employees');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id + '_' + Math.random()}>
                        <NavLink to={`/employees/${item.id}`}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        );
    }
}


EmployeesListContainer.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesListContainer);