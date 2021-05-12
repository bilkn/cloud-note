import { useState, useContext } from 'react';
import { useFirebaseAuth } from '../hooks';
import {
  createFileURL,
  validateFileFormat,
  validateFileSize,
} from '../helpers';
import { getUserDocRef } from '../helpers/manageFirestore';
import { DataContext, DialogContext, ToastContext } from '../context';
import { storage } from '../lib/firebase.dev';
import NoAvatar from "../assets/no-avatar.png"

export default function useProfileLogic() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);
  const { currentUser, updateProfile } = useFirebaseAuth();
  const [name, setName] = useState(dataState?.profile?.name || '');
  const [bio, setBio] = useState(dataState?.profile?.bio || '');
  const [errors, setErrors] = useState({});
  const [picture, setPicture] = useState(null);
  const [pictureURL, setPictureURL] = useState(currentUser?.photoURL || NoAvatar); // !!! Add no picture.
  const [loading, setLoading] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);

  const handlePictureSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!errors.length && picture) {
      const extension = picture.type.split('/')[1];
      const storageRef = storage.ref();
      const pictureRef = storageRef.child(
        `pictures/${currentUser.uid}.${extension}`
      );

      try {
        if (currentUser.photoURL) {
          await storage.refFromURL(currentUser.photoURL).delete();
        }
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
        });
      }
    }
    setErrors({});
    setLoading(false);
    setShowFileInput(false);
  };

  const handleBioAndNameSubmit = async (e) => {
    e.preventDefault();

    const errorObj = {};

    if (bio.length > 1200) errorObj.bio = 'Maximum character limit is 1200.';
    if (name.length > 100) errorObj.name = 'Maximum character limit is 100.';

    if (Object.keys(errorObj).length) {
      return setErrors({ ...errors, ...errorObj });
    }

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
    setErrors({});
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    setPicture(file);
    const errorArr = [];

    if (!validateFileSize(file, 1))
      errorArr.push('Picture size must be lower than 1MB.');

    if (
      !validateFileFormat(file, [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif',
      ])
    ) {
      errorArr.push('Picture must be in JPG/JPEG, PNG or GIF format.');
    }

    if (!errorArr.length) {
      setPictureURL(createFileURL(file));
      return setErrors([]);
    }
    setErrors({ picture: errorArr });
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    const deleteUserPicture = async () => {
      setLoading(true);
      try {
        await storage.refFromURL(currentUser.photoURL).delete();
        await updateProfile({ photoURL: '' });
        setPictureURL('');
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Picture has been deleted successfully',
        });
      } catch (err) {
        console.log(err);
        dispatchToast({ type: 'ERROR' });
      }
      setLoading(false);
    };
    setDialog({
      isOpen: true,
      text: 'Are you sure you want to delete your picture?',
      handler: deleteUserPicture,
      buttons: ['Cancel', 'Delete'],
    });
  };

  return {
    name,
    setName,
    bio,
    setBio,
    pictureURL,
    showFileInput,
    setShowFileInput,
    handleBioAndNameSubmit,
    loading,
    errors,
    handlePictureSubmit,
    handleFileChange,
    handleDeleteClick,
  };
}
