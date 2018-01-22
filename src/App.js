import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { nativeDevice } from './utils';
import './App.css';
import PlatformNavBar from './components/PlatformNavBar';
import Logo from './components/Logo';
import SocialGroup from './components/Social';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Oops! No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const Home = () => (
  <div>
    <p className="App-title">Anna Garcia's new website coming soon.</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Code = () => (
  <div>
    <h2>Code</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);

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
