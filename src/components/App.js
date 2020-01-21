import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';

class App extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
