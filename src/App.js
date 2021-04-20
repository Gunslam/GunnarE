import React from 'react';
import logo from './LnadingText.svg';
import landing from './Title_falling.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={landing} className="App-logo" alt="logo" />
        <p className="Quote">"My falls allow me to rise high"
            <br/>
        - Gunnar Enserro
        </p>
      </header>
    </div>
  );
}

export default App;
