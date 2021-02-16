import { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { useDeletePortfolio } from '@/actions/portfolios';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard';
import { isAuthorized } from '@/utils/auth0';

const Portfolios = ({ portfolios: initialPortfolios }) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const { data: userData, loading: loadingUser } = useGetUser();

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      'Are you sure you want to delete this portfolio?'
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      setPortfolios(portfolios.filter((p) => p._id !== portfolioId));
    }
  };

  return (
    <BaseLayout user={userData} loading={loadingUser}>
      <BasePage header='Portfolios' className='portfolio-page'>
        <Row>
          {portfolios.map((portfolio) => (
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`);
              }}
              md='4'
            >
              <PortfolioCard portfolio={portfolio}>
                {userData && isAuthorized(userData, 'admin') && (
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          '/portfolios/[id]/edit',
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                      className='mr-2'
                      color='warning'
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                      color='danger'
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const res = await new PortfolioApi().getPortfolios();
  const portfolios = await res.data;

  return {
    props: { portfolios },
    revalidate: 1,
  };
};

export default Portfolios;
