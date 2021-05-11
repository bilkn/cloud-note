import '@firebase/firestore';
import { db } from '../lib/firebase.dev';
import firebase from "firebase";

const createUserData = () => {
  const note = {
    id: 4124214,
    color: 'red',
    timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
    lastModified: null,
    deletionDate: null,
    text: 'Hello World!',
  };
  return {
    profile: { name: '', picture: null, bio: '' },
    results: [note],
    deleted: [],
  };
};

export const initUser = async (id) => {
  await db.collection('users').doc(id).set(createUserData());
};

export const getDoc = async (id) => {
  const doc = await db.collection('users').doc(id).get();
  return doc.exists ? doc : null;
};

export const get = async (id) => {
  const doc = await getDoc(id);
  return doc ? doc.data() : null;
};
