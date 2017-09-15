import React, { Component } from 'react';
import Logo from './Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <div style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.1))' }}>
            <Logo width={180} height={180} />
          </div>
          <h1>Chris Heninger</h1>
          <a
            href="https://twitter.com/chrisheninger"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/chrisheninger"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="./resume">Resume</a>
        </div>
        <div className="archives">
          <span>Archive –</span>
          <a href="./archive/2013">[ 2013 ]</a>
          <a href="./archive/2014">[ 2014 ]</a>
        </div>
      </div>
    );
  }
}

export default App;
