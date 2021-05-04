import { useCallback } from 'react';

export default function useLocalStorage() {
  const getItem = useCallback((key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }, []);

  const setItem = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  return { getItem, setItem };
}
