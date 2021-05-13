import { useContext, useEffect } from 'react';
import { useFirestore, useLocalStorage } from '.';
import { DataContext, DialogContext, ToastContext } from '../context';

export default function useData() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);
  const { setItem } = useLocalStorage();
  const { setOperation } = useFirestore();

  const Add = (id, text) => {
    const type = 'ADD';
    setOperation({ id, type });
    dispatchData({
      type,
      payload: {
        id,
        text,
      },
    });

    // !!! Add local storage backup.
  };

  const AddTemplate = (color) => {
    dispatchData({
      type: 'ADD_TEMPLATE',
      payload: { color },
    });
  };

  const Delete = (id) => {
    const type = 'DELETE';
    setOperation({ id, type });
    dispatchData({ type, deleteId: id });
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'Note has been deleted.',
    });
  };

  const DeleteAll = () => {
    const type = 'DELETE_ALL';
    setOperation({ id: '', type });
    dispatchData({ type });
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'All notes have been deleted permanently.',
    });
  };

  const DeletePermanently = (id, store, notification = true, dialog = true) => {
    const deleteHandler = () => {
      const type = 'PERMANENT_DELETE';
      setOperation({ id, type });
      dispatchData({
        type,
        payload: { deleteId: id, store },
      });
      if (notification) {
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Note has been deleted permanently.',
        });
      }
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

  const Recover = (id) => {
    const type = 'RECOVER';
    setOperation({ id, type });
    dispatchData({ type, payload: { recoverId: id } });
    SortByDate();
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'Note has been recovered.',
    });
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
