import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './components/App';
import Testing from './components/Testing';
import './css/index.css';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={Testing}/>
    </div>
  </Router>),
  document.getElementById('root')
);
