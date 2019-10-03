import axios from 'axios';

const baseUrl = 'https://evening-basin-34525.herokuapp.com/api';

export const fetchAllWines = () => {
  return axios.get(`${baseUrl}`);
};

export const fetchWine = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};
