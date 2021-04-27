import { v4 as uuidv4 } from 'uuid';
import { colors } from '../styles/variables';

export const dummyData = {
  id: uuidv4(),
  text:
    'Lorem ipsum !  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus impedit dolores sit quisquam deleniti vitae ex! Distinctio odit veritatis consectetur, ipsum quas fuga cumque sint autem perspiciatis omnis eveniet adipisci voluptatem ipsa odio eum similique neque itaque, numquam alias molestiae aut! Deleniti quam dolorum voluptas, suscipit nulla quod voluptate?',
  timestamp: new Date(),
  lastModified: new Date(),
  color: colors.orange,
};

export const dummyDataList = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({ ...dummyData, id: uuidv4() });
  }
  return arr;
};
