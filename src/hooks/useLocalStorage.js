import { useCallback } from 'react';

export default function useLocalStorage() {
  const getItem = useCallback((key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (err) {
      console.log(err);
    }
    return null;
  }, []);

  const setItem = useCallback((key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const removeItem = useCallback((key) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const pushItem = useCallback(
    (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify([...getItem(key), value]));
      } catch (err) {
        console.log(err);
      }
    },
    [getItem]
  );

  return { getItem, setItem, pushItem, removeItem };
}
