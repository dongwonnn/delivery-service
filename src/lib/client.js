import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://delivery-service-web.herokuapp.com/api';

// client.defaults.header.common['Authorization']

export default client;
