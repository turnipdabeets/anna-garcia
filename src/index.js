import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { nativeDevice } from './utils';

const addNativeClass = nativeDevice ? 'native-content' : '';

ReactDOM.render(
  <App classname={addNativeClass} />,
  document.getElementById('root')
);
registerServiceWorker();
