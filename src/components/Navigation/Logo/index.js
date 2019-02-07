import React from 'react';
import Logo from '../../../svg/logo';
import './Logo.css';
import { nativeDevice } from '../../../utils';
import TouchableAnchor from '../TouchableAnchor';

const addNativeClass = nativeDevice ? 'logo-native' : '';

const TouchableLogo = () => (
  <div className="logo-wrapper">
    <TouchableAnchor
      render={Logo}
      href="https://www.annagarcia.live"
      title="logo"
      touchClass={`logo-hover ${addNativeClass}`}
      defaultClass={`logo ${addNativeClass}`}
    />
  </div>
);

export default TouchableLogo;
