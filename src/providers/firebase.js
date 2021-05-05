import React, { useEffect, useState } from 'react';
import { FirebaseContext } from '../context';
import { auth } from '../lib/firebase.dev';

export default function FirebaseProvider({ children, ...restProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

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
    loading,
  };
  return (
    <FirebaseContext.Provider value={value} {...restProps}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}
