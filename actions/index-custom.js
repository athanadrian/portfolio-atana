import { useEffect, useState } from 'react';

export const useGetData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        if (res.status === 200) {
          setData(result);
        } else {
          setError(result);
        }
      } catch (error) {
        console.log('error', error);
      }

      setLoading(false);
    };
    url && fetchData();
  }, [url]);

  return { data, error, loading };
};
