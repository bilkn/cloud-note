import { useContext } from 'react';
import { DataContext, ToastContext } from '../context';

export default function useData() {
  const { dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);

  const Add = (color, text) => {
    const type = 'ADD';
    dispatchData({
      type,
      payload: { color, text },
    });
    dispatchToast({
      type,
    });
  };

  const Delete = (id) => {
    const type = 'DELETE';
    dispatchData({ type, removeId: id });
    dispatchToast({
      type,
    });
  };

  const Update = (updatedData) => {
    const type = 'UPDATE';
    dispatchData({ type, updatedData });
    dispatchToast({
      type,
    });
  };

  return { Add, Delete, Update };
}
