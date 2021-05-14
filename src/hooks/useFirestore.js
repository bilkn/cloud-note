import { useCallback } from 'react';
import { useFirebaseAuth } from '.';
import {
  addDataToDB,
  deleteDataFromDB,
  moveDataInDB,
  updateDataFromDB,
} from '../helpers/manageFirestore';

export default function useFirestore() {
  const { currentUser } = useFirebaseAuth();

  const addToDb = useCallback(
    async (data,text) => {
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

  return {
    addToDb,
    deleteFromDB,
    moveInDB,
    updateFromDB,
  };
}
