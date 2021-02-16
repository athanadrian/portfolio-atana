import React from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import withAuth from '@/hoc/withAuth';

const BlogEditor = ({ user, loading }) => {
  return (
    <BaseLayout className='cover' user={user} loading={loading}>
      <BasePage header='Blog Editor'></BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor)('admin');
