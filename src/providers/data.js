import React, { useEffect, useReducer } from 'react';
import { DataContext } from '../context';
import { dataReducer } from '../reducers';
import { mapDataListWithDate } from '../helpers';
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
    console.log(data);
  }, [getItem, setItem]);

  // !!! If user is online don't map the dates.
  const initialize = () => {
    const results = getItem('results')
      ? mapDataListWithDate(getItem('results'))
      : [];
    const deleted = getItem('deleted')
      ? mapDataListWithDate(getItem('deleted'))
      : [];
      console.log(results)
    return {
      results,
      deleted,
      isLoading: false,
      isError: false,
    };
  };

  const [dataState, dispatchData] = useReducer(dataReducer, initialize());
  return (
    <DataContext.Provider value={{ dataState, dispatchData }} {...props} />
  );
}
