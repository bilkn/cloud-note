import { DataProvider, DialogProvider, ToastProvider } from "../providers";
import { v4 as uuidv4 } from 'uuid';
export const AllProviders = ({ children }) => {
  const fakeNote = {
    id: uuidv4(),
    color: 'orange',
    timestamp: new Date(),
    text: 'Testing note',
  };
  const fakeData = [fakeNote];
  const dataState = {
    results: fakeData,
    deleted: [],
    isLoading: false,
    isError: false,
  };
   const dialogState = {
     isOpen: false,
     handler: null,
     text: '',
     buttons: [],
   };
  const dispatchData = jest.fn();
  const dispatchToast = jest.fn();
  const setDialog = jest.fn();
  return (
    <DataProvider value={{ dataState: dataState, dispatchData }}>
      <ToastProvider value={{ toastState: [], dispatchToast }}>
        <DialogProvider value={[dialogState, setDialog]}>
            {children}
        </DialogProvider>
      </ToastProvider>
    </DataProvider>
  );
};
