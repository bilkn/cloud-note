import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export default function useQuery(param) {
  const history = useHistory();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.append(param, query);
    } else {
      params.delete(param);
    }
    history.replace({ search: params.toString() });
  }, [query, history, param]);

  return { query, setQuery };
}

