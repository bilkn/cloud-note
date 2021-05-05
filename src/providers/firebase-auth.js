import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from '../context';
import { auth } from '../lib/firebase.dev';

export default function FirebaseAuthProvider({ children, ...restProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

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
    login,
    logout,
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
