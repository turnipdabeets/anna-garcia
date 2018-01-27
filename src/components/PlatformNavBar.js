import React from 'react';
import { NavLink } from 'react-router-dom';
import { nativeDevice } from '../utils';
import './PlatformNavBar.css';
import 'font-awesome/css/font-awesome.min.css';

const activeColor = '#f40ef0';
const deviceClass = nativeDevice ? 'nativeRouteGroup' : 'routeGroup';

const sharedPaths = [
  {
    name: 'about',
    to: '/about',
    icon: 'fa fa-info'
  },
  {
    name: 'music',
    to: '/music',
    icon: 'fa fa-music'
  },
  {
    name: 'code',
    to: '/code',
    icon: 'fa fa-code'
  },
  {
    name: 'contact',
    to: '/contact',
    icon: 'fa fa-envelope'
  }
];

const createLinks = paths =>
  paths.map(path => (
    <li key={path.name}>
      <NavLink exact to={path.to} activeStyle={{ color: activeColor }}>
        {nativeDevice && <i className={path.icon} aria-hidden="true" />}
        <p>{path.name}</p>
      </NavLink>
    </li>
  ));

const NavBar = () => (
  /*eslint-disable jsx-a11y/no-redundant-roles */
  <nav role="navigation" className="navigation">
    <ul className={deviceClass}>
      {nativeDevice &&
        createLinks([{ name: 'home', to: '/', icon: 'fa fa-home' }])}
      {createLinks(sharedPaths)}
    </ul>
  </nav>
);

export default NavBar;
