import './assets/css/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required for HMR
import App from './components/App'; // App 

renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const App = require('./components/App').default;
        renderWithHotReload(App);
    });
}

function renderWithHotReload(App) {
    render(
        <App /> , 
        document.getElementById('app')
    );
}