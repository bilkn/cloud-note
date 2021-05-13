import { useContext, useEffect, useCallback } from 'react';
import { useFirebaseAuth, useFirestore, useLocalStorage } from '.';
import { DataContext, DialogContext, ToastContext } from '../context';
import { db } from '../lib/firebase.dev';

export default function useData() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);
  const { setItem } = useLocalStorage();
  const { setOperation, deleteFromDB, moveInDB } = useFirestore();
  const { currentUser, reauth } = useFirebaseAuth();

  const findData = useCallback(
    (datalist, id) =>
      dataState[datalist].find(({ id: dataId }) => id === dataId),
    [dataState]
  );

  // If user is authenticated, datas will be operated on the firestore. Otherwise, datas will be operated on the local storage.
  const Add = (id, text) => {
    const type = 'ADD';
    dispatchData({
      type,
      payload: {
        id,
        text,
      },
    });
    if (!currentUser) {
      return dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Note has been added.',
      });
    }
    setOperation({ id, type });
  };

  const AddTemplate = (color) => {
    dispatchData({
      type: 'ADD_TEMPLATE',
      payload: { color },
    });
  };

  const Delete = async (id) => {
    const type = 'DELETE';
    const data = findData('results', id);
    const deletionDate = new Date();
    const date = { type: 'deletionDate', value: deletionDate };
    const successMessage = () =>
      dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Note has been deleted.',
      });

    if (currentUser) {
      try {
        await moveInDB('deleted', data, date);
        dispatchData({ type, payload: { deleteId: id, deletionDate } });
        successMessage();
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'Note could not be deleted.',
        });
        // !!! Add local storage backup.
      }
      return;
    }

    dispatchData({ type, payload: { deleteId: id, deletionDate } });
    successMessage();
  };

  const DeleteAll = async (password) => {
    const type = 'DELETE_ALL';
    const { uid } = currentUser;

    const successMessage = () => {
      dispatchToast({
        type: 'NOTIFICATION',
        payload: 'All notes have been deleted permanently.',
      });
    };

    if (currentUser) {
      try {
        await reauth(password);
        await db.collection('users').doc(uid).update({
          results: [],
          deleted: [],
        });
        dispatchData({ type });
        successMessage();
      } catch (err) {
        throw err;
        // !!! Add local storage backup.
      }
      return;
    }
    dispatchData({ type });
    successMessage();
  };

  const DeletePermanently = (id, store, notification = true, dialog = true) => {
    const deleteHandler = async () => {
      const type = 'PERMANENT_DELETE';

      const successMessage = () => {
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Note has been deleted permanently.',
        });
      };

      if (currentUser) {
        const data = findData('deleted', id);
        try {
          await deleteFromDB(data);
          dispatchData({ type, payload: { deleteId: id, store } });
          successMessage();
        } catch (err) {
          console.log(err);
          dispatchToast({
            type: 'ERROR',
            payload: 'Note could not be deleted.',
          });
          // !!! Add local storage backup.
        }
        return;
      }

      dispatchData({
        type,
        payload: { deleteId: id, store },
      });
      if (notification) successMessage();
    };

    if (dialog) {
      setDialog({
        isOpen: true,
        text: 'Are you sure you want to delete this note permanently?',
        handler: deleteHandler,
        buttons: ['Cancel', 'Delete'],
      });
    } else deleteHandler();
  };

  const Modify = (id, text) => {
    const type = 'MODIFY';
    setOperation({ id, type });
    dispatchData({ type, payload: { modifyId: id, text } });
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'Changes have been saved.',
    });
  };

  const Recover = async (id) => {
    const type = 'RECOVER';

    const successMessage = () => {
      dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Note has been recovered.',
      });
    };

    if (currentUser) {
      const data = findData('deleted', id);
      try {
        await moveInDB('results', data);
        dispatchData({ type, payload: { recoverId: id } });
        successMessage();
        SortByDate();
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'Note could not be recovered.',
        });
        // !!! Add local storage backup.
      }
      return;
    }
    dispatchData({ type, payload: { recoverId: id } });
    successMessage();
    SortByDate();
  };

  const SortByDate = () => {
    dispatchData({ type: 'SORT_BY_DATE' });
  };

  useEffect(() => {
    if (dataState.results && dataState.deleted) {
      setItem('results', dataState.results);
      setItem('deleted', dataState.deleted);
    }
  }, [dataState, setItem]);

  return {
    Add,
    AddTemplate,
    Delete,
    DeleteAll,
    DeletePermanently,
    Modify,
    Recover,
    SortByDate,
  };
}
