import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import store from './store';
import './index.css';

import App from './components/App';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <BrowserRouter>
          <CssBaseline>
            <App />
          </CssBaseline>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
