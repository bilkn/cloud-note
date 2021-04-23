import React, { useReducer } from 'react';
import { ToastContext } from '../context';
import { toastReducer } from '../reducers';

export default function ToastProvider(props) {
  const [ toastState, dispatchToast] = useReducer(toastReducer, []);
  return (
    <ToastContext.Provider value={{ toastState, dispatchToast }} {...props} />
  );
}
