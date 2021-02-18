import { withRouter } from 'next/router';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ({ portfolio }) => {
  const { data, loading: loadingUser } = useGetUser();
  console.log('data portfolio', data);
  return (
    <BaseLayout className='cover' user={data} loading={loadingUser}>
      <BasePage header='Portfolio Detail' title={`${portfolio.title} - Atana`}>
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  );
};

// // Server side rendering
// export const getServerSideProps = async ({ query }) => {
//   const res = await getPortfolioById(query.id);
//   const portfolio = await res.data.data;

//   return { props: { portfolio } };
// };

// Client-Static side rendering
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id },
    };
  });
  return { paths, fallback: false };
}

// Client-Static side rendering
export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}
export default withRouter(Portfolio);
