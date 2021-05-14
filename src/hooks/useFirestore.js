import { useCallback, useEffect } from 'react';
import { useFirebaseAuth, useLocalStorage } from '.';
import { mapDataListWithDate } from '../helpers';
import {
  addDataToDB,
  deleteDataFromDB,
  moveDataInDB,
  updateDataFromDB,
  addDatasetToDB,
} from '../helpers/manageFirestore';


export default function useFirestore() {
  const { currentUser } = useFirebaseAuth();
  const { getItem, setItem } = useLocalStorage();

  const addToDb = useCallback(
    async (data, text) => {
      const { uid } = currentUser;
      await addDataToDB({ field: 'results', data, text, uid });
    },
    [currentUser]
  );

  const deleteFromDB = useCallback(
    async (data) => {
      const { uid } = currentUser;
      await deleteDataFromDB({ field: 'deleted', data, uid });
    },
    [currentUser]
  );

  const moveInDB = useCallback(
    async (targetField, data, date) => {
      const { uid } = currentUser;
      await moveDataInDB({
        oldField: targetField === 'results' ? 'deleted' : 'results',
        newField: targetField,
        data,
        date,
        uid,
      });
    },
    [currentUser]
  );

  const updateFromDB = useCallback(
    async (data, date, text) => {
      const { uid } = currentUser;
      await updateDataFromDB({ field: 'results', data, date, text, uid });
    },
    [currentUser]
  );

  useEffect(() => {
    const syncLocalDataWithFirestore = async () => {
      const willBeAdded = mapDataListWithDate(getItem('willBeAdded'));
      const { uid } = currentUser;
      if (willBeAdded.length) {
        try {
          await addDatasetToDB({ field: 'results', dataset: willBeAdded, uid });
          setItem('willBeAdded', []);
        } catch (err) {
          console.log(err);
        }
      }
    };
    if (currentUser) {
      syncLocalDataWithFirestore();
    }
  }, [currentUser, getItem, setItem]);

  return {
    addToDb,
    deleteFromDB,
    moveInDB,
    updateFromDB,
  };
}
