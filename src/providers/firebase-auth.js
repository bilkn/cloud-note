import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from '../context';
import { auth } from '../lib/firebase.dev';
import firebase from 'firebase';

export default function FirebaseAuthProvider({ children, ...restProps }) {
  const [currentUser, setCurrentUser] = useState(null);
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
  };
  return (
    <FirebaseAuthContext.Provider value={value} {...restProps}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
