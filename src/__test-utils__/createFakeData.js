import MockData from './mock-data.json';
import { mapDataListWithDate } from '../helpers';

export default function createFakeData() {
  return mapDataListWithDate(MockData);
}
