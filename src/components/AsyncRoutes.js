import React from 'react';
import Loadable from 'react-loadable';
import BasicPageLoader from './BasicPageLoader';
import ContactPageLoader from './ContactPageLoader';

export const Home = () => (
  <div>
    <p className="App-title">Anna Garcia's new website coming soon.</p>
  </div>
);

export const Music = Loadable({
  loader: () => import('./Music'),
  loading: BasicPageLoader
});

export const About = Loadable({
  loader: () => import('./About'),
  loading: BasicPageLoader
});

export const Code = Loadable({
  loader: () => import('./Code'),
  loading: BasicPageLoader
});

export const Contact = Loadable({
  loader: () => import('./Contact'),
  loading: ContactPageLoader
});

export const NoMatch = Loadable({
  loader: () => import('./NoMatch'),
  loading: BasicPageLoader
});
