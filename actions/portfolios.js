import axios from 'axios';
import useSWR from 'swr';

import { useApiHandler, fetcher } from 'actions';

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);
const updatePortfolio = (id, data) =>
  axios.put(`/api/v1/portfolios/${id}`, data);

const deletePortfolio = (id) => axios.delete(`/api/v1/portfolios/${id}`);

export const useGetPortfolio = (id) => {
  const { data, error, ...restProps } = useSWR(
    id ? `/api/v1/portfolios/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...restProps };
};

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);
export const useDeletePortfolio = () => useApiHandler(deletePortfolio);
