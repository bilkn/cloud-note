import { useState, useContext, useCallback, useEffect } from 'react';
import { useFirebaseAuth } from '.';
import { DataContext, ToastContext } from '../context';
import {
  addDataToDB,
  deleteDataFromDB,
  moveDataInDB,
} from '../helpers/manageFirestore';

export default function useFirestore() {
  const [operation, setOperation] = useState({ id: '', type: '' });
  const { currentUser } = useFirebaseAuth();
  const { dataState } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);

  const addToDb = useCallback(
    async (data) => {
      try {
        await addDataToDB(data, currentUser.uid);
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Note has been added.',
        });
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'Note could not be saved to the server.',
        });
      }
      // !!! Add local storage backup.
    },
    [currentUser?.uid, dispatchToast]
  );

  const deleteFromDB = useCallback(
    async (data) => {
      const { uid } = currentUser;
      await deleteDataFromDB({ field: 'deleted', data, uid });
    },
    [currentUser]
  );

  const moveInDB = useCallback(
    async (data) => {
      const { uid } = currentUser;
      await moveDataInDB({
        oldField: 'results',
        newField: 'deleted',
        data,
        uid,
      });
    },
    [currentUser]
  );

  const findDataFromDatalist = useCallback(
    (datalist) => dataState[datalist].find(({ id }) => id === operation.id),
    [dataState, operation.id]
  );

  useEffect(() => {
    const { type } = operation;
    if (!currentUser) return;

    switch (type) {
      case 'ADD':
        {
          const data = findDataFromDatalist('results');
          addToDb(data);
        }
        break;
      default:
        break;
    }
    if (operation.id) setOperation({ id: '', type: '' });
  }, [currentUser, dataState, operation, addToDb, findDataFromDatalist]);

  return { setOperation, deleteFromDB, moveInDB, findDataFromDatalist };
}
