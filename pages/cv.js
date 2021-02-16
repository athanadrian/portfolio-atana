import React from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import { useGetUser } from '@/actions/user';

const Cv = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout className='cover' user={data} loading={loading}>
      <BasePage>
        <p>cv page</p>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
