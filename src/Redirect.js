import React from 'react';
import logo from './assets/logo.png';
import './Redirect.css';

const appScheme = "exp://192.168.8.103:19000";
const appName = "PROSTUFF";

function Redirect() {
  const isIos = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  window.location.href = appScheme;

  return (
    <div className="redirect">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Redirect zur {appName} {isIos ? 'iPhone' : 'Android'} App
        </p>
        <a className="button" href={appScheme}>
          Zur App
        </a>
    </div>
  );
}

export default Redirect;