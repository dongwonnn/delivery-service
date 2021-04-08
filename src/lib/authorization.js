import client from './client';

// https://delivery-service-web.herokuapp.com/api
// "homepage": "http://dongwonnn.github.io/delivery-service",

export const login = ({ email, password }) =>
  client.post('https://delivery-service-web.herokuapp.com/api/auth/login', {
    email,
    password,
  });

export const register = ({ name, email, password }) =>
  client.post('https://delivery-service-web.herokuapp.com/api/auth/register', {
    name,
    email,
    password,
  });

export const check = () =>
  client.get('https://delivery-service-web.herokuapp.com/api/auth/user');

export const logout = () =>
  client.delete('https://delivery-service-web.herokuapp.com/api/auth/logout');
