import PortfolioApi from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0';

export default async function handlePortfolio(req, res) {
  if (req.method === 'GET') {
    const result = await new PortfolioApi().getById(req.query.id);
    return res.json(result.data);
  }
  if (req.method === 'PUT') {
    try {
      const { accessToken } = await auth0.getSession(req);
      const result = await new PortfolioApi(accessToken).update(
        req.query.id,
        req.body
      );
      return res.json(result.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { accessToken } = await auth0.getSession(req);
      const result = await new PortfolioApi(accessToken).delete(req.query.id);
      return res.json(result.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }
}
