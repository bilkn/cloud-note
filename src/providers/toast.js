import React, { useReducer } from 'react';
import { ToastContext } from '../context';
import { toastReducer } from '../reducers';

export default function ToastProvider(props) {
  const [state, dispatch] = useReducer(toastReducer, []);
  return <ToastContext.Provider value={[state, dispatch]} {...props} />;
}
