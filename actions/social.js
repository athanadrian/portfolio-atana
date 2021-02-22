import useSWR from 'swr';

import { fetcher } from 'actions';

export const useGetUserGithub = () => {
  const { data, error, ...rest } = useSWR(`/api/v1/social/github`, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

export const useGetUserStrava = () => {
  const { data, error, ...rest } = useSWR(`/api/v1/social/strava`, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
