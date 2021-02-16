import React from 'react';
import { Row, Col } from 'reactstrap';

import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import PortfolioForm from '@/components/PortfolioForm';
import Redirect from '@/components/shared/Redirect';
import withAuth from '@/hoc/withAuth';
import { useCreatePortfolio } from '@/actions/portfolios';

const PortfolioNew = ({ user, loading: userLoading }) => {
  console.log('user new', user);
  const [createPortfolio, { data, error, loading }] = useCreatePortfolio();

  if (data) {
    return <Redirect to='/portfolios' />;
  }

  return (
    <BaseLayout className='cover' user={user} loading={userLoading}>
      <BasePage header='Create Portfolio'>
        <Row>
          <Col md='8'>
            <PortfolioForm onSubmit={createPortfolio} />
            {error && <div className='alert alert-danger mt-2'>{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)('admin');
