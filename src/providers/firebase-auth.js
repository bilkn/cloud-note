import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from '../context';
import { auth } from '../lib/firebase.dev';
import firebase from 'firebase';
import useLocalStorage from '../hooks/useLocalStorage';

export default function FirebaseAuthProvider({ children, ...restProps }) {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const [currentUser, setCurrentUser] = useState(getItem('auth'));
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

  const updateEmail = (email) => currentUser.updateEmail(email);

  const updatePassword = (password) => currentUser.updatePassword(password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) setItem('auth', 'true');
      else removeItem('auth');
      setLoading(false);
    });
    return unsubscribe;
  }, [setItem,removeItem]);

  useEffect(() => {
    console.log(currentUser);
  });

  const value = {
    currentUser,
    signup,
    signInWithGoogle,
    signin,
    signout,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  return (
    <FirebaseAuthContext.Provider value={value} {...restProps}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
