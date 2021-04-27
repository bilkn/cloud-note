import { useContext } from 'react';
import { DataContext, ToastContext } from '../context';

export default function useData() {
  const { dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);

  const Add = (id, text) => {
    const type = 'ADD';
    dispatchData({
      type,
      payload: { id, text },
    });
    dispatchToast({
      type,
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
      type,
    });
  };

  const DeleteAll = () => {
    const type = 'DELETE_ALL';
    dispatchData({ type });
    dispatchToast({
      type,
    });
  };

  const DeletePermanently = (id) => {
    dispatchData({ type: 'PERMANENT_DELETE', deleteId: id });
  };

  const Modify = (id, text) => {
    const type = 'MODIFY';
    dispatchData({ type, payload: { modifyId: id, text } });
    dispatchToast({
      type,
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
    SortByDate,
  };
}
