import React from 'react';
import Logo from '../svg/logo';
import '../App.css';
import TouchableIcon from './TouchableIcon';

const TouchableLogo = () => (
  <div className="App-logo">
    <TouchableIcon
      icon={Logo}
      href="https://www.annagarcia.live"
      title="logo"
      hoverClass="logo-hover"
      defaultClass="logo"
    />
  </div>
);

export default TouchableLogo;
