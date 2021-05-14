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

export const addDataToDB = async (args) => {
  const { field, data, text, uid } = args;
  await db
    .collection('users')
    .doc(uid)
    .update({
      [field]: firebase.firestore.FieldValue.arrayUnion({
        ...data,
        text,
        lastModified: data.timestamp,
      }),
    });
};

export const deleteDataFromDB = async (args) => {
  const { field, data, uid } = args;
  await db
    .collection('users')
    .doc(uid)
    .update({
      [field]: firebase.firestore.FieldValue.arrayRemove(data),
    });
};

export const updateDataFromDB = async (args) => {
  const { field, data, date, text, uid } = args;
  await db
    .collection('users')
    .doc(uid)
    .update({
      [field]: firebase.firestore.FieldValue.arrayRemove(data),
    });

  await db
    .collection('users')
    .doc(uid)
    .update({
      [field]: firebase.firestore.FieldValue.arrayUnion({
        ...data,
        text,
        [date.type]: date.value,
      }),
    });
};

export const moveDataInDB = async (args) => {
  const { oldField, newField, data, date, uid } = args;
  const docRef = db.collection('users').doc(uid);
  await docRef.update({
    [newField]: firebase.firestore.FieldValue.arrayUnion({
      ...data,
      [date.type]: date.value,
    }),
  });

  await docRef.update({
    [oldField]: firebase.firestore.FieldValue.arrayRemove(data),
  });
};
