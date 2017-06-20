import './assets/css/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';

console.log('Hello from index.js');

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);