import { useState, useContext } from 'react';
import { useFirebaseAuth } from '../hooks';
import { getUserDocRef } from '../helpers/manageFirestore';
import { DataContext, ToastContext } from '../context';

export default function useProfileLogic() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const [name, setName] = useState(dataState?.profile0?.name || '');
  const [bio, setBio] = useState(dataState?.profile?.bio || '');
  const { currentUser } = useFirebaseAuth();

  const handleBioAndNameSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        const docRef = getUserDocRef(currentUser.uid);
        await docRef.update({
          'profile.name': name,
          'profile.bio': bio,
        });
        dispatchData({
          type: 'SET_PROFILE',
          payload: { name, bio, picture: null }, // !!! Change picture.
        });
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Your profile has been updated.',
        });
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'An error occurred. Please Try again.',
        });
      }
    }
  };

  return { name, setName, bio, setBio, handleBioAndNameSubmit };
}
