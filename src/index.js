import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";

import './i18n'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Suspense fallback={null}>
            <App />
          </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
