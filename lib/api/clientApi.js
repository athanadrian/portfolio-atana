import axios from 'axios';
// const ngrok = 'bc5469c038af';

// const instance = axios.create({
//   baseURL: `http://${ngrok}.ngrok.io/api/v1`,
// });

const instance = axios.create({
  //baseURL: `http://localhost:3001/api/v1`,
  baseURL: process.env.PORTFOLIO_API_URL,
});

// instance.interceptors.request.use(
//   async (request) => {
//     console.log('request', await auth0.getSession(request));

//     const accessToken = cookie.get('Cookie');
//     console.log('accessToken', accessToken);
//     //const token = await getToken();
//     if (accessToken && accessToken !== null) {
//       request.headers.authorization = `Bearer ${accessToken}`;
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Make a reference to get requests in order to run code before and after them
// const get = instance.get;

// instance.get = async (url, params, axiosConfig) => {
//   try {
//     const response = await get(url, params, axiosConfig);
//     console.log('in try');
//     store(url, response.data.data);
//     return response;
//   } catch (error) {
//     console.log('in catch');
//     console.log('client error', error.response.data.error);
//     const data = await getValue(url);
//     //return data
//     return data
//       ? { data: { success: true, count: data.length, data: data } }
//       : error;
//   }
// };

export default instance;
