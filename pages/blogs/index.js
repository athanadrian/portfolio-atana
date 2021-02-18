import React from 'react';
import { Row, Col } from 'reactstrap';

import BasePage from 'components/BasePage';
import MastHead from 'components/shared/MastHead';
import BaseLayout from '@/components/layouts/BaseLayout';
import BlogItem from 'components/BlogItem';
import { useGetUser } from '@/actions/user';
import BlogApi from 'lib/api/blogs';

const Blogs = ({ blogs }) => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout
      navClass='transparent'
      className='blog-listing-page'
      user={data}
      loading={loading}
    >
      <MastHead imagePath='/images/home-bg.jpg'>
        <h1>Fresh Blogs</h1>
        <span className='subheading'>Programming, climbing...</span>
      </MastHead>
      <BasePage className='blog-body'>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} md='10' lg='8' className='mx-auto'>
              <BlogItem blog={blog} />
              <hr></hr>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const { data } = await new BlogApi().getAll();
  const blogs = data.map((item) => ({ ...item.blog, author: item.author }));
  return {
    props: { blogs },
    revalidate: 60,
  };
}
export default Blogs;
