import axios from 'axios';

export const getCategories = () =>
  axios.get('http://localhost:4000/categories');

export const getStores = () => axios.get('http://localhost:4000/stores');

export const getDetails = () =>
  axios.get(
    'http://ec2-52-79-243-119.ap-northeast-2.compute.amazonaws.com/api/eateries/2',
  );
