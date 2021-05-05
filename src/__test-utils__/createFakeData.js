import MockData from '../fixtures/mock-data.json';
import { mapDataListWithDate } from '../helpers';

export default function createFakeData() {
  return mapDataListWithDate(MockData);
}
