require('./demo.scss');
import React from 'react';
import App from './app';

class Demo extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-heading">A Complex Example</div>
          <div className="panel-body">
            <App />
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
