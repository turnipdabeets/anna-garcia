import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import SocialGroup from './components/Social';
import Logo from './components/Logo';

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

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);

const Music = () => (
  <div>
    <p className="App-title">
      <a href="http://music.annagarcia.live">http://music.annagarcia.live</a>
    </p>
  </div>
);

const Routes = () => {
  return (
    <ul className="routeGroup">
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li>
        <Link to="/music">music</Link>
      </li>
    </ul>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Logo />
          <Routes />
          <SocialGroup />
        </header>
        <body className="App-body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route from="/music" component={Music} />
            <Route component={NoMatch} />
          </Switch>
        </body>
      </div>
    </Router>
  );
};

export default App;
