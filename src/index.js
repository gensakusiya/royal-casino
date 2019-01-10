// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './index.css';

const mainBox: ?HTMLElement = document.getElementById('root');

if (mainBox) {
  ReactDOM.render(<App />, mainBox);
} else {
    throw new Error('root element hasn\'t created');
}
