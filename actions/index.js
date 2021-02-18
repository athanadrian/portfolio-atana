import { useState } from 'react';

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export const useApiHandler = (apiCall) => {
  const [reqState, setReqState] = useState({
    data: null,
    error: null,
    loading: false,
  });

  const handler = async (...data) => {
    setReqState({ data: null, error: null, loading: true });
    try {
      const res = await apiCall(...data);
      setReqState({ data: res.data, error: null, loading: false });
      return res.data;
    } catch (e) {
      const errorMessage =
        (e.response && e.response.data) || 'Oops something went wrong!';
      console.log('errorMessage', errorMessage);
      setReqState({ data: null, error: errorMessage, loading: false });
      return Promise.reject(errorMessage);
    }
  };

  return [handler, { ...reqState }];
};
