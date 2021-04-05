import axios from 'axios';

const client = axios.create();

// client.defaults.baseURL = 'https://delivery-service-web.herokuapp.com/api';
client.defaults.withCredentials = true;

// const ACCESS_TOKEN = localStorage.getItem('access-token');

// client.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
export default client;
