import React from 'react';
import logo from './assets/logo.png';
import './Download.css';

function Download() {

  function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
  }  

  docReady(function() {
    if(navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      window.location.href = 'http://play.google.com/store/apps/details?id=com.prostuff.prostuff';
    }
    if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
      window.location.href = 'https://apps.apple.com/de/app/prostuff/id1553954162?l=de';
    }
  }); 

  return (
    <div className="redirect">
        <img src={logo} className="logo" alt="logo"/>
        <p>
          Du wirst in den App Store weitergeleitet...
        </p>
    </div>
  );
}

export default Download;