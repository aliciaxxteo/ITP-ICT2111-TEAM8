import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Testing from './Testing.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/test'>See data in DB</Link>
      </div>
    );
  }
}

export default App;
