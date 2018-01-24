import React from 'react';
import { Link } from 'react-router-dom';
import { nativeDevice } from '../utils';
import './PlatformNavBar.css';
import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {
  let deviceClass;
  if (nativeDevice) {
    deviceClass = 'nativeRouteGroup';
  } else {
    deviceClass = 'routeGroup';
  }

  return (
    /*eslint-disable jsx-a11y/no-redundant-roles */
    <nav role="navigation" className="navigation">
      <ul className={deviceClass}>
        {nativeDevice && (
          <li>
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true" />
              <p>home</p>
            </Link>
          </li>
        )}
        <li>
          <Link to="/about">
            {nativeDevice && <i className="fa fa-info" aria-hidden="true" />}
            <p>about</p>
          </Link>
        </li>
        <li>
          <Link to="/music">
            {nativeDevice && <i className="fa fa-music" aria-hidden="true" />}
            <p>music</p>
          </Link>
        </li>
        <li>
          <Link to="/code">
            {nativeDevice && <i className="fa fa-code" aria-hidden="true" />}
            <p>code</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {nativeDevice && (
              <i className="fa fa-envelope" aria-hidden="true" />
            )}
            <p>contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
