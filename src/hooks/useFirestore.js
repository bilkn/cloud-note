import { useState, useContext, useCallback, useEffect } from 'react';
import { useFirebaseAuth } from '.';
import { DataContext, ToastContext } from '../context';
import { addDataToDB } from '../helpers/manageFirestore';

export default function useFirestore() {
  const [operation, setOperation] = useState({ id: '', type: '' });
  const { currentUser } = useFirebaseAuth();
  const { dataState } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);

  const addToDb = useCallback(
    async (data) => {
      try {
        await addDataToDB(data, currentUser?.uid);
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Note has been added.',
        });
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'Note could not be saved.',
        });
      }
    },
    [currentUser?.uid, dispatchToast]
  );

  useEffect(() => {
    if (!currentUser) return;
    switch (operation.type) {
      case 'ADD':
        {
          const data = dataState.results.find(({ id }) => id === operation.id);
          addToDb(data);
        }
        break;
      default:
        break;
    }
    if (operation.id) setOperation({ id: '', type: '' });
  }, [currentUser, dataState, operation, addToDb]);

  return { setOperation };
}
