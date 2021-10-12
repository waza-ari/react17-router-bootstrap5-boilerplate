import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";

import './i18n'
import ErrorProvider from "./common/providers/ErrorProvider";

ReactDOM.render(
  <React.StrictMode>
      <ErrorProvider>
          <BrowserRouter>
              <Suspense fallback={null}>
                <App />
              </Suspense>
          </BrowserRouter>
      </ErrorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
