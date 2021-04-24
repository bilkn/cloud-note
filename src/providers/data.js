import React, { useReducer } from 'react';
import { DataContext } from '../context';
import { dataReducer } from '../reducers';

export default function DataProvider(props) {
  const [dataState, dispatchData] = useReducer(dataReducer, {
    results: [],
    deleted: [],
    isLoading: false,
    isError: false,
  });
  return (
    <DataContext.Provider value={{ dataState, dispatchData }} {...props} />
  );
}
