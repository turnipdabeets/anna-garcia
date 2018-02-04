import React from 'react';
import { nativeDevice } from '../utils';
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
      <div
        className={`animated-loader animated-copy copy1 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy2 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy3 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy4 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy5 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy6 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy7 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy8 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy9 ${addNativeClass}`}
      />
      <div
        className={`animated-loader animated-copy copy10 ${addNativeClass}`}
      />
    </div>
  );
};

export default Loading;
