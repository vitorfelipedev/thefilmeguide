import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const request = React.useCallback(async (apiPromise) => {
    try {
      setError(null);
      setLoading(true);
      const response = await apiPromise;
      setData(response.data);
      return { response, error: null };
    } catch (err) {
      setError(err.message);
      return { response: null, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);
  return { data, loading, error, request };
};

export default useFetch;
