import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';



const mountNode = document.getElementById('app');
ReactDOM.render(<App name="User" />, mountNode);
