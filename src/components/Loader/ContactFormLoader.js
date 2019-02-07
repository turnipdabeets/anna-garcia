import React from 'react';
import { nativeDevice } from '../../utils';
import './Loader.css';

const addNativeClass = nativeDevice ? 'native-content' : '';

const Loading = () => {
  return (
    <div>
      <div className={`animated-loader animated-email ${addNativeClass}`} />
      <div className={`animated-loader animated-message ${addNativeClass}`} />
    </div>
  );
};

export default Loading;
