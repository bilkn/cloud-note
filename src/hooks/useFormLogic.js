import { useState } from 'react';
import { useFirebaseAuth } from '.';

export default function useFormLogic() {
  const { currentUser, updateProfile, updateEmail } = useFirebaseAuth();
  const [username, setUsername] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    console.log('submit');
    if (!password)
      return console.log(
        'Please type your password in order to save your settings.'
      );
    const promises = [];
    if (currentUser.displayName !== username)
      promises.push(updateProfile(username));
    if (currentUser.email !== email)
      promises.push(updateEmail(email, password));
    if (promises.length) {
      try {
        console.log('try');
        await Promise.all(promises);
        console.log('Changes have been saved.');
      } catch (err) {
        handleErrors(err);
      }
    }
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
      default:
        errorObj.general = 'Your password is incorrect. Please try again.';
        break;
    }
    setErrors({...errors, ...errorObj});
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
    handleSubmit,
  };
}
