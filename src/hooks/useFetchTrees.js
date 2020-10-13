import { useState, useEffect } from 'react';

const useFetchTrees = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_TREE_API)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return { data, loading, error };
};

export default useFetchTrees;
