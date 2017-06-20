import React from 'react';
import Paragraph from './Paragraph';

console.info('Hello from App.js');

const App = () => {
    return (
        <div>
            <h1 className="title">Hello from React</h1>
            <Paragraph />
        </div>
    );
};

export default App