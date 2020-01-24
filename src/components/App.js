/* eslint-disable react/no-unused-state */

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
      lastComputed: '',
    };
  }

  handleClick = (buttonName) => {
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app-calculator">
        <Display result={total || next || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
