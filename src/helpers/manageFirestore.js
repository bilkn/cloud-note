import '@firebase/firestore';
import { db } from '../lib/firebase.dev';
import firebase from 'firebase';

const createUserData = () => {
  return {
    profile: { name: '', bio: '' },
    results: [],
    deleted: [],
  };
};

export const initUser = async (id) => {
  await db.collection('users').doc(id).set(createUserData());
};

export const getUserDocRef = (id) => {
  return db.collection('users').doc(id);
};

export const getDoc = async (id) => {
  const doc = await db.collection('users').doc(id).get();
  return doc.exists ? doc : null;
};

export const get = async (id) => {
  const doc = await getDoc(id);
  return doc ? doc.data() : null;
};

export const addDataToDB = async (data, uid) => {
  await db
    .collection('users')
    .doc(uid)
    .update({
      results: firebase.firestore.FieldValue.arrayUnion(data),
    });
};

/* export const temporaryRemoveDataFromDB = async (data, uid) => {
  await db
    .collection('users')
    .doc(uid)
    .update({
      results: firebase.firestore.FieldValue.arrayRemove(data),
    });
};
 */

