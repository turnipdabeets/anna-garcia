import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { nativeDevice } from '../../utils';
import Logo from '../Navigation/Logo';
import PlatformNavBar from '../Navigation/NavBar';
import SocialGroup from '../Navigation/Social/';
import './App.css';
import PageRoutes from '../Navigation/Routes/PageRoutes';

const headerStyle = nativeDevice ? 'App-header-native' : 'App-header';
const bodyStyle = nativeDevice ? 'App-body-native' : 'App-body';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="App-container">
          <header className={headerStyle}>
            <Logo />
            {!nativeDevice && <PlatformNavBar />}
            <SocialGroup />
          </header>
          <section className={bodyStyle}>
            <PageRoutes />
          </section>
          <footer className="App-footer">
            {nativeDevice && <PlatformNavBar />}
          </footer>
        </div>
      </Router>
    </div>
  );
};

export default App;
