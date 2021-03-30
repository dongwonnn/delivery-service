import client from './client';

export const login = ({ username, password }) =>
  client.post('', { username, password });

export const register = ({ username, password }) =>
  client.post('', { username, password });

export const check = () => client.get('');
