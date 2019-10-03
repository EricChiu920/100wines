import axios from 'axios';

export const fetchAllWines = () => {
  return axios.get('https://top-100-example.s3.amazonaws.com/t100_2018.json');
};

export const fetchWine = (id) => {
  return axios.get(`https://top-100-example.s3.amazonaws.com/${id}.json`);
};
