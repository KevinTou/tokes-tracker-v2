import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
    },
    // baseURL: 'http://localhost:4000/',
    baseURL: 'https://tokes-tracker-v2-be.herokuapp.com',
  });
};
