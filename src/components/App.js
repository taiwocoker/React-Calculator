import React from 'react';
import '../index.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

function App() {
  return (
    <div className="App d-flex">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
