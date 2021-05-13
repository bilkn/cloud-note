import { useState, useContext } from 'react';
import { useFirebaseAuth } from '.';
import { ToastContext } from '../context';

export default function usePasswordLogic() {
  const { updatePassword } = useFirebaseAuth();
  const { dispatchToast } = useContext(ToastContext);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const submit = async () => {
    setLoading(true);
    setErrors(null);
    const errorObj = {};

    if (!password) errorObj.password = 'Please enter your current password.';
    if (!newPassword) errorObj.newPassword = 'Please enter a new password.';

    if (password && newPassword) {
      try {
        await updatePassword(password, newPassword);
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Password has been changed successfully.',
        });
      } catch (err) {
        console.log(err);
        handleErrors(err);
      }
    } else setErrors({ ...errors, ...errorObj });

    resetPasswordAndLoadingStates();
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
      case 'auth/invalid-password':
        errorObj.password = 'Password must be at least 6 characters.';
        break;
      case 'auth/wrong-password':
        errorObj.password = 'Your password is incorrect. Please try again.';
        break;
      default:
        dispatchToast({
          type: 'ERROR',
        });
        break;
    }
    setErrors({ ...errors, ...errorObj });
  };

  return {
    loading,
    errors,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    submit,
  };
}
