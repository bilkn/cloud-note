import React, { useState } from 'react';
import { DialogContext } from '../context';

export default function DialogProvider(props) {
  const dialogState = useState({
    isOpen: false,
    handler: null,
    text: '',
    buttons: []
  });
  
  return (
    <DialogContext.Provider value={dialogState} {...props} />
  );
}
