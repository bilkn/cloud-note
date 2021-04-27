import React, { useReducer } from 'react';
import { DataContext } from '../context';
import { dataReducer } from '../reducers';
import { dummyDataList } from '../fixtures/dummy-data';
export default function DataProvider(props) {
  
  const [dataState, dispatchData] = useReducer(dataReducer, {
    results: [...dummyDataList(50)],
    deleted: [],
    isLoading: false,
    isError: false,
  });
  return (
    <DataContext.Provider value={{ dataState, dispatchData }} {...props} />
  );
}
