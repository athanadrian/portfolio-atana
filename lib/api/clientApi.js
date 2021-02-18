import axios from 'axios';
// const ngrok = 'bc5469c038af';

// const instance = axios.create({
//   baseURL: `http://${ngrok}.ngrok.io/api/v1`,
// });

const instance = axios.create({
  //baseURL: `http://localhost:3001/api/v1`,
  baseURL: process.env.PORTFOLIO_API_URL,
});

export default instance;
