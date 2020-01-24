/* eslint-disable no-unused-vars */
import React from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="app-calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
