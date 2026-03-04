import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { nativeDevice } from './utils';

const addNativeClass = nativeDevice ? 'native-content' : '';

const root = createRoot(document.getElementById('root'));
root.render(<App classname={addNativeClass} />);
