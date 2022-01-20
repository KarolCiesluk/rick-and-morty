import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from "styled-normalize";

import App from './App';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);