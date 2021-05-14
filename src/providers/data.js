import React, { useCallback, useEffect, useReducer } from 'react';
import { DataContext } from '../context';
import { dataReducer } from '../reducers';
import {
  mapDataListWithDate,
  mapFirestoreDataListWithJSDate,
} from '../helpers';
import { useFirebaseAuth, useLocalStorage } from '../hooks';
import { get } from '../helpers/manageFirestore.js';

export default function DataProvider(props) {
  const { getItem, setItem } = useLocalStorage();
  const { currentUser } = useFirebaseAuth();

  useEffect(() => {
    const data = getItem('willBeAdded');
    if (!data) {
      setItem('results', []);
      setItem('deleted', []);
      setItem('willBeAdded', []);
    }
  }, [getItem, setItem]);

  const getUserDataFromLocalStorage = useCallback(() => {
    const results = getItem('results')
      ? mapDataListWithDate(getItem('results'))
      : [];
    const deleted = getItem('deleted')
      ? mapDataListWithDate(getItem('deleted'))
      : [];
    return {
      results,
      deleted,
      isLoading: false,
      isError: false,
    };
  }, [getItem]);

  const getUserDataFromFirestore = useCallback(async () => {
    try {
      const data = await get(currentUser.uid);

      if (!data) throw Error('No data.');
      const results = mapFirestoreDataListWithJSDate(data.results);
      const deleted = mapFirestoreDataListWithJSDate(data.deleted);
      return {
        ...data,
        deleted,
        results,
        isLoading: false,
        isError: false,
      };
    } catch (err) {
      console.log(err);
      return getUserDataFromLocalStorage();
    }
  }, [currentUser?.uid, getUserDataFromLocalStorage]);

  useEffect(() => {
    const setUserData = async () => {
      const userData = await getUserDataFromFirestore();
      dispatchData({ type: 'SET', payload: userData });
    };
    
    if (currentUser) setUserData();
  }, [currentUser, getUserDataFromFirestore]);

  const [dataState, dispatchData] = useReducer(
    dataReducer,
    getUserDataFromLocalStorage()
  );
  return (
    <DataContext.Provider value={{ dataState, dispatchData }} {...props} />
  );
}
