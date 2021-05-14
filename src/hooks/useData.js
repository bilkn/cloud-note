import { useContext, useEffect, useCallback } from 'react';
import { useFirebaseAuth, useFirestore, useLocalStorage } from '.';
import { DataContext, DialogContext, ToastContext } from '../context';
import { db } from '../lib/firebase.dev';

export default function useData() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);
  const { setItem, pushItem } = useLocalStorage();
  const { addToDb, deleteFromDB, moveInDB, updateFromDB } = useFirestore();
  const { currentUser, reauth } = useFirebaseAuth();

  const findData = useCallback(
    (datalist, id) =>
      dataState[datalist].find(({ id: dataId }) => id === dataId),
    [dataState]
  );

  // If user is authenticated, datas will be operated on the firestore. Otherwise, datas will be operated on the local storage.
  const Add = async (id, text) => {
    const type = 'ADD';
    const data = findData('results', id);

    const successMessage = () => {
      dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Note has been added.',
      });
    };

    if (currentUser) {
      try {
        await addToDb(data, text);
        dispatchData({
          type,
          payload: {
            id,
            text,
          },
        });
        successMessage();
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'Note could not be added.',
        });
      }
      return;
    }
    pushItem('willBeAdded', { ...data, text,lastModified: data.timestamp });
    dispatchData({
      type,
      payload: {
        id,
        text,
      },
    });
    successMessage();
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

  const Modify = async (id, text) => {
    const type = 'MODIFY';
    const lastModified = new Date();
    const date = { type: 'lastModified', value: lastModified };

    const successMessage = () => {
      dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Changes have been saved.',
      });
    };

    if (currentUser) {
      const data = findData('results', id);
      try {
        await updateFromDB(data, date, text);
        dispatchData({ type, payload: { modifyId: id, text, lastModified } });
        successMessage();
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'Note could not edited.',
        });
      }
      return;
    }

    dispatchData({ type, payload: { modifyId: id, text, lastModified } });
    successMessage();
  };

  const Recover = async (id) => {
    const type = 'RECOVER';
    const deletionDate = null;
    const date = { type: 'deletionDate', value: deletionDate };

    const successMessage = () => {
      dispatchToast({
        type: 'NOTIFICATION',
        payload: 'Note has been recovered.',
      });
    };

    if (currentUser) {
      const data = findData('deleted', id);

      try {
        await moveInDB('results', data, date);
        dispatchData({ type, payload: { recoverId: id } });
        successMessage();
        SortByDate();
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'Note could not be recovered.',
        });
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
  }, [dataState, setItem, currentUser]);

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
