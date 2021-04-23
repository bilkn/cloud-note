import { v4 as uuidv4 } from 'uuid';

export default function dataReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
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

    case 'DELETE': {
      const { results, deleted } = state;
      const { removeId } = action;
      const willRemovedData = results.find(({ id }) => id === removeId);
      const newResults = results.filter(({ id }) => id !== removeId);
      const newDeleted = [willRemovedData, ...deleted];
      return { ...state, results: newResults, deleted: newDeleted };
    }

    default:
      throw Error(`Unhandled action type: ${action.type}!`);
  }
}
