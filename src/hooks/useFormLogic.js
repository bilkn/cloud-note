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
        console.log('An error occurred.');
        const { code, message } = err;
        console.log(code);
        switch (code) {
          case 'auth/email-already-exists':
          case 'auth/invalid-email':
            setErrors({ ...errors, email: message });
            break;
          case 'auth/invalid-password':
          case 'auth/wrong-password':
            setErrors({ ...errors, password: message });
            break;
          default:
            setErrors({ general: 'An error occurred.' });
            break;
        }
      }
    }
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
