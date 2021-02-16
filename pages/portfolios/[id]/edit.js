import { Col, Row } from 'reactstrap';
import { toast } from 'react-toastify';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import PortfolioForm from '@/components/PortfolioForm';
import Redirect from '@/components/shared/Redirect';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio, useUpdatePortfolio } from '@/actions/portfolios';

const PortfolioEdit = ({ user }) => {
  const { query } = useRouter();
  const { data: initialData } = useGetPortfolio(query.id);
  const [updatePortfolio, { error }] = useUpdatePortfolio();

  const _updatePortfolio = async (data) => {
    await updatePortfolio(query.id, data);
    toast.success('Portfolio has been updated!', { autoClose: 2000 });
  };

  return (
    <BaseLayout className='cover' user={user} loading={false}>
      <BasePage header='Edit Portfolio'>
        <Row>
          <Col md='8'>
            {initialData && (
              <PortfolioForm
                initialData={initialData}
                onSubmit={_updatePortfolio}
              />
            )}
            {error && <div className='alert alert-danger mt-2'>{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioEdit)('admin');
