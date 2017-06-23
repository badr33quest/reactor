import './Main.scss';

import React, { Component } from 'react';

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
            </main>
        );
    }
}

export default Main;