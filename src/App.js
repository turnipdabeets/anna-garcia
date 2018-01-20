import React from 'react';
import './App.css';
import SocialGroup from './components/Social';
import Logo from './components/Logo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <SocialGroup />
      </header>
      <p className="App-title">Anna Garcia's new website coming soon.</p>
    </div>
  );
};

export default App;
