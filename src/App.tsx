import React from 'react';
import './App.scss';
import {FiShare2, FiTwitter, FiFacebook, FiInstagram} from "react-icons/fi"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <FiShare2/>
          <FiInstagram />
          <FiTwitter />
          <FiFacebook />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
