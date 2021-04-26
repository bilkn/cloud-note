import { v4 as uuidv4 } from 'uuid';
import { colors } from '../styles/variables';

export const dummyData = {
  id: uuidv4(),
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quam repellat eaque quod eligendi explicabo. Quisquam quod quo sed nemo! Iusto perferendis, laboriosam labore laborum odit nemo quam voluptate tempora voluptas nihil libero a vel commodi! Voluptatibus cumque consectetur corporis consequatur eveniet vitae non ut, ratione magni ducimus molestiae eligendi!',
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
