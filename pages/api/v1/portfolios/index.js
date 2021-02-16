import PortfolioApi from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0';

export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const result = await new PortfolioApi(accessToken).createPortfolio(
      req.body
    );
    return res.json(result.data.data);
  } catch (e) {
    console.log('we are getting error');
    return res.status(e.status || 422).json(e.response.data);
  }
}
