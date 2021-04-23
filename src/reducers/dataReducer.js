import { v4 as uuidv4 } from 'uuid';

export default function dataReducer(state, action) {
  switch (action.type) {
    case 'ADD_DATA': {
      const { text, color } = action.payload;
      const newData = {
        id: uuidv4(),
        color,
        timestamp: new Date(),
        text,
      };
      const newResults = [newData, ...state.results];
      return { ...state, results: newResults };
    }

    case 'REMOVE_DATA': {
      const { results, deleted } = state;
      const { removeId } = action.payload;
      const willRemovedData = results.find(({ id }) => id === removeId);
      const newResults = results.filter(({ id }) => id !== removeId);
      const newDeleted = [willRemovedData, ...deleted];
      return { results: newResults, deleted: newDeleted, ...state };
    }

    default:
      throw Error(`Unhandled action type! ${action.type}`);
  }
}
