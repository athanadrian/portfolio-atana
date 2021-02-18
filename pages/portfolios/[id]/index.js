import { withRouter } from 'next/router';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import { formatDate } from 'utils/functions';

const Portfolio = ({
  portfolio: {
    title,
    description,
    jobTitle,
    company,
    companyWebsite,
    startDate,
    endDate,
    location,
  },
}) => {
  const { data, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout navClass='transparent' user={data} loading={loadingUser}>
      <BasePage
        noWrapper
        indexPage
        title={`${title} - Atana`}
        metaDescription={description}
      >
        <div className='portfolio-detail'>
          <div className='cover-container d-flex h-100 p-3 mx-auto flex-column'>
            <main role='main' className='inner page-cover'>
              <h1 className='cover-heading'>{title}</h1>
              <p className='lead dates'>
                {formatDate(startDate, 'LL')}-{formatDate(endDate, 'LL')}
              </p>
              <p className='lead info mb-0'>
                {jobTitle} | {company} | {location}
              </p>
              <p className='lead'>{description}</p>
              <p className='lead'>
                <a href='#' className='btn btn-lg btn-secondary'>
                  {companyWebsite}
                </a>
              </p>
            </main>
          </div>
        </div>
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
