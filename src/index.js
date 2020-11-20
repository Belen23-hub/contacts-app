import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Router from './components/App'


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
