import React from 'react';
import ConactFormLoader from './ContactFormLoader';
import { nativeDevice } from '../../utils';
import './Loader.css';

const addNativeClass = nativeDevice ? 'native-content' : '';

const Loading = () => {
  return (
    <div>
      <div className={`animated-loader animated-title ${addNativeClass}`} />
      <div className={`animated-loader animated-intro ${addNativeClass}`} />
      <div
        className={`animated-loader animated-intro intro2 ${addNativeClass}`}
      />
      <div style={{ margin: '0 5%' }}>
        <ConactFormLoader />
      </div>
    </div>
  );
};

export default Loading;
