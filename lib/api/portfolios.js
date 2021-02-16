import clientApi from './clientApi';

class PortfolioApi {
  constructor(accessToken) {
    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
  }
  getPortfolios = async () => await clientApi.get('/portfolios');

  getPortfolioById = async (id) => await clientApi.get(`/portfolios/${id}`);

  createPortfolio = async (data) =>
    //await axios.post(process.env.PORTFOLIO_API_URL + '/portfolios', data);
    await clientApi.post('/portfolios', data, this.config);

  updatePortfolio = async (id, data) =>
    await clientApi.put(`/portfolios/${id}`, data, this.config);

  deletePortfolio = async (id) =>
    await clientApi.delete(`/portfolios/${id}`, this.config);
}

export default PortfolioApi;
