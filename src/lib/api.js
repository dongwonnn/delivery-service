import axios from '../../node_modules/axios/index';

export const getCategories = () => {
  axios.get('http://localhost:4000/categories');
};

export const getStores = () => {
  axios.get('http://localhost:4000/stores');
};
