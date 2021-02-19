import BlogApi from '@/lib/api/blogs';
import auth0 from '@/utils/auth0';

export default async function getUserBlogs(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const result = await new BlogApi(accessToken).getByUser();
    return res.json(result.data);
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
