import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from '../context';
import { auth } from '../lib/firebase.dev';
import firebase from 'firebase';

export default function FirebaseAuthProvider({ children, ...restProps }) {
  const [currentUser, setCurrentUser] = useState(auth?.currentUser || null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        console.log(error);
      });
  };

  const signin = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const signout = () => auth.signOut();

  const resetPassword = (email) => auth.sendPasswordResetEmail(email);

  const updateEmail = async (email, password) => {
    try {
      const credential = getUserCredential(password);
      await currentUser.reauthenticateWithCredential(credential);
      await currentUser.updateEmail(email);
    } catch (err) {
      throw err
    }
  };

  const updatePassword = (password) => currentUser.updatePassword(password);

  const updateProfile = (displayName, photoURL) =>
    currentUser.updateProfile({ displayName, photoURL });

  const getUserCredential = (password) =>
    firebase.auth.EmailAuthProvider.credential(
      currentUser.email,
      '' + password
    );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signInWithGoogle,
    signin,
    signout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
  };
  return (
    <FirebaseAuthContext.Provider value={value} {...restProps}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
