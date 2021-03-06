import { useContext, useState, useCallback } from 'react';
import { useData, useFirebaseAuth } from '.';
import { DialogContext, ToastContext } from '../context';
import { getUserDocRef } from '../helpers/manageFirestore';
import { storage } from '../lib/firebase.dev';

export default function useSettingsLogic() {
  const {
    currentUser,
    updateProfile,
    updateEmail,
    deleteAccount,
    isUserAuthWithGoogle,
  } = useFirebaseAuth();
  const [username, setUsername] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [, setDialog] = useContext(DialogContext);
  const { dispatchToast } = useContext(ToastContext);
  const { DeleteAll } = useData();

  const isPhotoURLFromGoogle = useCallback(
    () => /googleusercontent/i.test(currentUser.photoURL),
    [currentUser.photoURL]
  );

  const submit = async () => {
    setErrors(null);
    const promises = [];

    if (currentUser.email === email && currentUser.displayName === username)
      return;

    if (!password && !isUserAuthWithGoogle) {
      setLoading(false);
      return setErrors({
        password: 'Please enter your password to save your settings.',
      });
    }

    setLoading(true);

    if (username && currentUser.displayName !== username)
      promises.push(updateProfile({ displayName: username }));
    if (email && currentUser.email !== email)
      promises.push(updateEmail(email, password));

    if (promises.length) {
      try {
        await Promise.all(promises);
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Changes have been saved.',
        });
      } catch (err) {
        console.log(err);
        handleErrors(err);
        resetPasswordAndLoadingStates();
      }
    }
    resetPasswordAndLoadingStates();
  };

  const handleDeleteAccount = (e) => {
    e.stopPropagation();
    setErrors(null);

    if (!password && !isUserAuthWithGoogle) {
      setErrors({
        password: 'Please enter your password to delete your account.',
      });
      return;
    }

    const deleteAccountHandler = async () => {
      try {
        setLoading(true);
        if (currentUser.photoURL && !isPhotoURLFromGoogle()) {
          await storage.refFromURL(currentUser.photoURL).delete();
        }
        await getUserDocRef(currentUser.uid).delete();
        await deleteAccount(password);
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'You account has been deleted successfully.',
        });
      } catch (err) {
        console.log(err);
        handleErrors(err);
      }
    };

    setDialog({
      isOpen: true,
      text: 'Are you sure you want to delete your account? This will permanently erase your account and notes.',
      handler: deleteAccountHandler,
      buttons: ['Cancel', 'Delete'],
    });

    resetPasswordAndLoadingStates();
  };

  const handleDeleteAllNotes = (e) => {
    e.stopPropagation();
    setErrors(null);

    if (!password && !isUserAuthWithGoogle) {
      setErrors({
        password: 'Please enter your password to delete your notes.',
      });
      return;
    }

    const deleteAllNotesHandler = async () => {
      try {
        setLoading(true);
        await DeleteAll(password);
      } catch (err) {
        console.log(err);
        handleErrors(err);
      }
      setLoading(false);
    };

    setDialog({
      isOpen: true,
      text: 'Are you sure you want to delete all your notes? This will permanently erase all of your notes.',
      handler: deleteAllNotesHandler,
      buttons: ['Cancel', 'Delete'],
    });
  };

  const resetPasswordAndLoadingStates = () => {
    setPassword('');
    setLoading(false);
  };

  const handleErrors = (err) => {
    const { code } = err;
    const errorObj = {};
    switch (code) {
      case 'auth/email-already-in-use':
        errorObj.email =
          'This email address is already taken. Please provide different email.';
        break;
      case 'auth/email-already-exists':
        errorObj.email =
          'This email address is already exists. Please provide different email.';
        break;
      case 'auth/invalid-email':
        errorObj.email = 'Please provide valid email.';
        break;
      case 'auth/wrong-password':
        errorObj.password = 'Your password is incorrect. Please try again.';
        break;
      default: {
        dispatchToast({
          type: 'ERROR',
        });
      }
    }
    setErrors({ ...errors, ...errorObj });
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    setErrors,
    loading,
    submit,
    handleDeleteAccount,
    handleDeleteAllNotes,
    currentUser,
  };
}
