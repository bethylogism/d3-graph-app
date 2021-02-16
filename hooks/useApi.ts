import { useMemo, useState } from 'react';

const baseUri = `http://127.0.0.1:8080/`;

const useApi = (endpoint: 'projects' | 'scores' = 'projects') => {
  const [data, setData] = useState(undefined);

  const memoizedData = useMemo(() => {
    fetch(`${baseUri}/${endpoint}`)
      .then((res) => res.json())
      .catch((e) => {
        console.error('error in memoizedRequest with: ', e);
      });
  }, []);

  return data;
};
