import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://delivery-service-web.herokuapp.com/api';

const ACCESS_TOKEN = 'access_token';

client.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
export default client;
