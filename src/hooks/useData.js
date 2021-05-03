import { useContext } from 'react';
import { DataContext, DialogContext, ToastContext } from '../context';

export default function useData() {
  const { dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);

  const Add = (id, text) => {
    const type = 'ADD';
    dispatchData({
      type,
      payload: { id, text },
    });
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'Note has been added.',
    });
  };

  const AddTemplate = (color) => {
    dispatchData({
      type: 'ADD_TEMPLATE',
      payload: { color },
    });
  };

  const Delete = (id) => {
    const type = 'DELETE';
    dispatchData({ type, deleteId: id });
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'Note has been deleted.',
    });
  };

  const DeleteAll = () => {
    const type = 'DELETE_ALL';
    dispatchData({ type });
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'All notes have been deleted permanently.',
    });
  };

  const DeletePermanently = (id, store, notification = true, dialog = true) => {
    const deleteHandler = () => {
      dispatchData({
        type: 'PERMANENT_DELETE',
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
        text:
          'Are you sure you want to delete this note permanently?',
        handler: deleteHandler,
        buttons: ['Cancel', 'Delete'],
      });
    } else deleteHandler();
  };

  const Modify = (id, text) => {
    const type = 'MODIFY';
    dispatchData({ type, payload: { modifyId: id, text } });
    dispatchToast({
      type: 'NOTIFICATION',
      payload: 'Changes have been saved.',
    });
  };

  const Recover = (id) => {
    const type = 'RECOVER';
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
