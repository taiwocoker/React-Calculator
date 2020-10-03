import React from 'react';
import '../index.css'
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App d-flex">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
