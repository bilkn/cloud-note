import { useContext, useState } from 'react';
import { useFirebaseAuth } from '.';
import { ToastContext } from '../context';

export default function useFormLogic() {
  const {
    currentUser,
    updateProfile,
    updateEmail,
    updatePassword,
  } = useFirebaseAuth();
  const [username, setUsername] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatchToast } = useContext(ToastContext);

  const submit = async () => {
    setLoading(true);
    setErrors(null);
    const promises = [];

    if (
      !password &&
      (currentUser.email !== email || currentUser.displayName !== username)
    ) {
      setErrors({
        password: 'Please enter your password to save your settings.',
      });
      setLoading(false);
      return;
    }

    handlePasswords(promises);

    if (currentUser.displayName !== username && username)
      promises.push(updateProfile(username));
    if (currentUser.email !== email && email)
      promises.push(updateEmail(email, password));

    if (promises.length) {
      try {
        await Promise.all(promises);
        dispatchToast({
          type: 'NOTIFICATION',
          payload: newPassword
            ? 'Password has been changed.'
            : 'Changes have been saved.',
        });
      } catch (err) {
        handleErrors(err);
        resetPasswordAndLoadingStates();
      }
    }
    resetPasswordAndLoadingStates();
  };

  const handlePasswords = (promises) => {
    if (password && newPassword) {
      promises.push(updatePassword(password, newPassword));
    }
  };

  const resetPasswordAndLoadingStates = () => {
    setPassword('');
    setNewPassword('');
    setLoading(false);
  };

  const handleErrors = (err) => {
    const { code } = err;
    const errorObj = {};
    switch (code) {
      case 'auth/email-already-exists':
        errorObj.email =
          'This email address is already being used. Please provide different email.';
        break;
      case 'auth/invalid-email':
        errorObj.email = 'Please provide valid email.';
        break;
      case 'auth/invalid-password':
        errorObj.password = 'Password must be at least 6 characters.';
        break;
      case 'auth/wrong-password':
        errorObj.password = 'Your password is incorrect. Please try again.';
        break;
      default: {
        dispatchToast({
          type: 'ERROR',
          payload: 'An error occurred.',
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
    newPassword,
    setNewPassword,
    errors,
    setErrors,
    loading,
    submit,
  };
}
