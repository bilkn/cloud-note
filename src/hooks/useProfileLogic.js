import { useState, useContext } from 'react';
import { useFirebaseAuth } from '../hooks';
import {
  createFileURL,
  validateFileFormat,
  validateFileSize,
} from '../helpers';
import { getUserDocRef } from '../helpers/manageFirestore';
import { DataContext, ToastContext } from '../context';
import { storage } from '../lib/firebase.dev';

export default function useProfileLogic() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const { currentUser, updateProfile } = useFirebaseAuth();
  const [name, setName] = useState(dataState?.profile?.name || '');
  const [bio, setBio] = useState(dataState?.profile?.bio || '');
  const [errors, setErrors] = useState([]);
  const [picture, setPicture] = useState(null);
  const [pictureURL, setPictureURL] = useState(currentUser?.photoURL || ''); // !!! Add no picture.
  const [loading, setLoading] = useState(false);

  const handlePictureSubmit = async (e) => {
    e.preventDefault();

    if (!errors.length && picture) {
      const extension = picture.type.split('/')[1];
      const storageRef = storage.ref();
      const pictureRef = storageRef.child(
        `pictures/${currentUser.uid}.${extension}`
      );

      try {
        await pictureRef.put(picture);
        const photoURL = await pictureRef.getDownloadURL();
        await updateProfile({ photoURL });
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Picture has been uploaded succesfully.',
        });
        setErrors([]);
      } catch (err) {
        console.log(err);
        dispatchToast({
          type: 'ERROR',
          payload: 'An error occurred.',
        });
      }
    }
  };

  const handleBioAndNameSubmit = async (e) => {
    e.preventDefault();
    if (bio.length > 1200)
    return console.log('Maximum character limit is 1200'); // !!! Add error for character limit.
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
          payload: { name, bio },
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    setPicture(file);
    const errorArr = [];

    if (!validateFileSize(file, 1))
      errorArr.push('File size must be lower than 1MB.');

    if (
      !validateFileFormat(file, [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif',
      ])
    ) {
      errorArr.push('File must be JPG/JPEG, PNG or GIF.');
    }
    if (errorArr) setErrors(errorArr);

    if (!errorArr.length) {
      setPictureURL(createFileURL(file));
      setErrors([]);
    }
  };

  return {
    name,
    setName,
    bio,
    setBio,
    pictureURL,
    handleBioAndNameSubmit,
    loading,
    errors,
    handlePictureSubmit,
    handleFileChange,
  };
}
