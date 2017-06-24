import './Main.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    PageTitle,
    PageDescription
} from 'app_atoms';

class Main extends React.Component {
    render() {
        return (
            <main>
                <PageTitle {...this.props} />
                <PageDescription {...this.props} />
                {this.props.children && <div className="page-content">
                    {this.props.children}
                </div>}
            </main>
        );
    }
}

Main.propTypes = {
    children: PropTypes.node
};


export default Main;