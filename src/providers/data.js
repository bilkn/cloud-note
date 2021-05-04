import React, { useEffect, useReducer } from 'react';
import { DataContext } from '../context';
import { dataReducer } from '../reducers';
import { dummyDataList } from '../fixtures/dummy-data';
import { useLocalStorage } from '../hooks';

export default function DataProvider(props) {
  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const data = getItem('results');
    if (!data) {
      setItem('results', []);
      setItem('deleted', []);
    }
  }, [getItem, setItem]);

  const [dataState, dispatchData] = useReducer(dataReducer, {
    results: getItem('results') || [],
    deleted: getItem('deleted') || [],
    isLoading: false,
    isError: false,
  });
  return (
    <DataContext.Provider value={{ dataState, dispatchData }} {...props} />
  );
}
