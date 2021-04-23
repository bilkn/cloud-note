import React, { useReducer } from 'react';
import { DataContext } from '../context';
import { dataReducer } from '../reducers';

export default function DataProvider(props) {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    results: [],
    deleted: [],
    isLoading: false,
    isError: false,
  });
  return (
    <DataContext.Provider value={{ dataState, dataDispatch }} {...props} />
  );
}
