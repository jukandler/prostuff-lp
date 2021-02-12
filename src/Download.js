import React from 'react';
import logo from './assets/logo.png';
import './Download.css';

function Download() {

  return (
    <div className="redirect">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Download im AppStore. Hier kommt ein Redirect rein.
        </p>
    </div>
  );
}

export default Download;