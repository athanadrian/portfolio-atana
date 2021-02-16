import React from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import withAuth from '@/hoc/withAuth';

const Dashboard = ({ user, loading }) => {
  return (
    <BaseLayout className='cover' user={user} loading={loading}>
      <BasePage header='DASHBOARD'></BasePage>
    </BaseLayout>
  );
};

export default withAuth(Dashboard)('admin');
