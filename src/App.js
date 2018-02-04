import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { nativeDevice } from './utils';
import {
  Home,
  About,
  Contact,
  Music,
  Code,
  NoMatch
} from './components/AsyncRoutes';
import Logo from './components/Logo';
import PlatformNavBar from './components/PlatformNavBar';
import SocialGroup from './components/Social';
import './App.css';

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
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route from="/music" component={Music} />
              <Route path="/code" component={Code} />
              <Route component={NoMatch} />
            </Switch>
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
