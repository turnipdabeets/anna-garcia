import React from 'react';
import Logo from '../svg/logo';
import './Logo.css';
import TouchableAnchor from './TouchableAnchor';

const TouchableLogo = () => (
  <div className="logo-wrapper">
    <TouchableAnchor
      render={Logo}
      href="https://www.annagarcia.live"
      title="logo"
      touchClass="logo-hover"
      defaultClass="logo"
    />
  </div>
);

export default TouchableLogo;
