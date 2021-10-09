import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Provider from './context/Provider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
