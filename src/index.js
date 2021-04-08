import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import { CookiesProvider } from 'react-cookie';
import { check } from './reducers/auth';

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    const access_token = localStorage.getItem('access_token');

    if (!user) return;

    store.dispatch(check(access_token));
  } catch (e) {
    console.log('localStorage is not working');
  }
}

loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="delivery-service">
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
