import { useState, useContext } from 'react';
import { useFirebaseAuth } from '.';
import siteURL from '../constants/siteURL';
import * as ROUTES from '../constants/routes';
import { ToastContext } from '../context';

export default function usePasswordResetLogic() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = useFirebaseAuth();
  const { dispatchToast } = useContext(ToastContext);

  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const actionCodeSettings = {
      url: siteURL + ROUTES.SIGN_IN,
      handleCodeInApp: false,
    };
    try {
      await resetPassword(email, actionCodeSettings);
      dispatchToast({
        type: 'NOTIFICATION',
        payload: `Password reset instructions have been sent to "${email}".`,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      setError(message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return { handlePasswordResetSubmit, handleEmailChange, email, error };
}
