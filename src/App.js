import React, { Component } from 'react';
import logo from './svg/logo.svg';
import './App.css';
import SocialGroup from './components/Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SocialGroup />
        </header>
        <p className="App-intro">Anna Garcia's new website coming soon.</p>
      </div>
    );
  }
}

export default App;
