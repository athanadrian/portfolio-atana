import axios from 'axios';

const instance = axios.create({
  //baseURL: 'https://portfolio-atana-api.onrender.com/api/v1',
  baseURL: process.env.PORTFOLIO_API_URL,
});

export default instance;
