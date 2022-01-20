import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from "styled-normalize";

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);