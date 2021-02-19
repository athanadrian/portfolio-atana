import clientApi from './clientApi';

class BaseApi {
  constructor(accessToken, subPath) {
    this.config = {};
    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
    this.url = subPath;
  }

  getAll = async () => await clientApi.get(this.url);
  getByUser = async () => await clientApi.get(`${this.url}/me`, this.config);
  getById = async (id) => await clientApi.get(`${this.url}/${id}`);
  getBySlug = async (slug) => await clientApi.get(`${this.url}/s/${slug}`);

  create = async (data) => await clientApi.post(this.url, data, this.config);

  update = async (id, data) =>
    await clientApi.put(`${this.url}/${id}`, data, this.config);

  delete = async (id) =>
    await clientApi.delete(`${this.url}/${id}`, this.config);
}

export default BaseApi;
