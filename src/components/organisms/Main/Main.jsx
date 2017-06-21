import './Main.scss';

import React, { Component } from 'react';

import PageTitle from '../../atoms/PageTitle/PageTitle';
import PageDescription from '../../atoms/PageDescription/PageDescription';

class Main extends React.Component {
    render() {
        return (
            <main>
                <PageTitle {...this.props} />
                <PageDescription {...this.props} />
            </main>
        );
    }
}

export default Main;