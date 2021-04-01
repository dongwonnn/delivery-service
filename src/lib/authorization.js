import client from './client';

export const login = ({ email, password }) =>
  client.post('/auth/login', { email, password });

export const register = ({ name, email, password }) =>
  client.post('/auth/register', { name, email, password });

// export const register = ({ name, password, passwordConfirm }) =>
//   axios.get(`https://delivery-service-web.herokuapp.com/api/menus/${menuId}`);
