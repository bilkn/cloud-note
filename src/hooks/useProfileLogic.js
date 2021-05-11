import { useState, useContext } from 'react';
import { useFirebaseAuth } from '../hooks';
import { getUserDocRef } from '../helpers/manageFirestore';
import { DataContext, ToastContext } from '../context';

export default function useProfileLogic() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const [name, setName] = useState(dataState?.profile?.name || '');
  const [bio, setBio] = useState(dataState?.profile?.bio || '');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useFirebaseAuth();

  const handleBioAndNameSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    setLoading(false);
  };

  return { name, setName, bio, setBio, handleBioAndNameSubmit,loading };
}
