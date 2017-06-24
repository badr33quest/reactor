import './assets/css/index.scss';
// import './assets/bootstrap/react-bootstrap-table.scss';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required for HMR
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from 'app_store/configureStore';
import App from './components/App';


const store = configureStore(); 
renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const App = require('./components/App').default;
        renderWithHotReload(App);
    });
}

function renderWithHotReload(App) {
    render(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>,
        document.getElementById('app')
    );
}