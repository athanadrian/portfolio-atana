import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Link from 'next/link';
import { toast } from 'react-toastify';

import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import MastHead from 'components/shared/MastHead';
import Dropdown from 'components/shared/Dropdown';
//import auth0 from 'utils/auth0';
import withAuth from 'hoc/withAuth';
//import BlogApi from 'lib/api/blogs';
import { useUpdateBlog, useGetUserBlogs } from 'actions/blogs';

const Dashboard = ({ user, loading }) => {
  const [updateBlog] = useUpdateBlog();
  const { data: blogs, mutate } = useGetUserBlogs();

  const changeBlogStatus = async (blogId, status) => {
    updateBlog(blogId, { status })
      .then(() => mutate())
      .catch(() => toast.error('Something went wrong...'));
  };

  const createOption = (blogStatus) => {
    return blogStatus === 'draft'
      ? { view: 'Publish Story', value: 'published' }
      : { view: 'Make A Draft', value: 'draft' };
  };

  const createOptions = (blog) => {
    const option = createOption(blog.status);

    return [
      {
        key: `${blog._id}-publish`,
        text: option.view,
        handlers: { onClick: () => changeBlogStatus(blog._id, option.value) },
      },
      {
        key: `${blog._id}-delete`,
        text: 'Delete',
        handlers: {
          onClick: () => changeBlogStatus(blog._id, 'deleted'),
        },
      },
    ];
  };

  const renderBlogs = (blogs, status) => (
    <ul className='user-blogs-list'>
      {blogs &&
        blogs
          .filter((blog) => blog.status === status)
          .map((blog) => (
            <li key={blog._id}>
              <Link href='/blogs/editor/[id]' as={`/blogs/editor/${blog._id}`}>
                <a>{blog.title}</a>
              </Link>
              <Dropdown items={createOptions(blog)} />
            </li>
          ))}
    </ul>
  );

  return (
    <BaseLayout navClass='transparent' user={user} loading={false}>
      <MastHead imagePath={'/images/home-bg.jpg'}>
        <h1>Blogs Dashboard</h1>
        <span className='subheading'>
          Let's write some nice blog today
          <Link href='/blogs/editor'>
            <Button color='primary'>Create a new Blog</Button>
          </Link>
        </span>
      </MastHead>
      <BasePage className='blog-user-page'>
        <Row>
          <Col md='6' className='mx-auto text-center'>
            <h2 className='blog-status-title'> Published Blogs </h2>
            {renderBlogs(blogs, 'published')}
          </Col>
          <Col md='6' className='mx-auto text-center'>
            <h2 className='blog-status-title'> Draft Blogs </h2>
            {renderBlogs(blogs, 'draft')}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

// export const getServerSideProps = withAuth(async ({ req, res }) => {
//   const { accessToken } = await auth0.getSession(req);
//   const json = await new BlogApi(accessToken).getByUser();
//   return { blogs: json.data };
// })('admin');
export default withAuth(Dashboard)('admin');
