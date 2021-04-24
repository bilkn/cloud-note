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

  const Modify = (id, text) => {
    const type = 'MODIFY';
    dispatchData({ type, payload: { modifyId: id, text }});
    dispatchToast({
      type,
    });
  };

  return { Add, Delete, Modify };
}
