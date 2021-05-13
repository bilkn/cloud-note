import { v4 as uuidv4 } from 'uuid';

export default function dataReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { id: dataId, text } = action.payload;
      const { results } = state;
      const willAddedData = results.find(({ id }) => id === dataId);
      const filteredResults = results.filter(({ id }) => id !== dataId);
      const lastModified = willAddedData.timestamp;
      const newData = {
        ...willAddedData,
        lastModified,
        text,
      };
      const newResults = [newData, ...filteredResults];
      return { ...state, results: newResults };
    }

    case 'ADD_TEMPLATE': {
      const { color } = action.payload;
      const date = new Date();
      const newData = {
        id: uuidv4(),
        color,
        timestamp: date,
        lastModified: null,
        deletionDate: null,
        text: '',
      };
      const newResults = [newData, ...state.results];
      return { ...state, results: newResults };
    }

    case 'DELETE': {
      const { results, deleted } = state;
      const { deleteId } = action;
      const deletionDate = new Date();
      const willRemovedData = results.find(({ id }) => id === deleteId);
      const newData = { ...willRemovedData, deletionDate };
      const newResults = results.filter(({ id }) => id !== deleteId);
      const newDeleted = [newData, ...deleted];
      return { ...state, results: newResults, deleted: newDeleted };
    }

    case 'DELETE_ALL': {
      return { ...state, results: [], deleted: [] };
    }

    case 'PERMANENT_DELETE': {
      const { deleteId, store } = action.payload;
      const newStore = state[store].filter(({ id }) => id !== deleteId);
      return { ...state, [store]: newStore };
    }

    case 'MODIFY': {
      const { modifyId, text } = action.payload;
      const { results } = state;
      const lastModified = new Date();
      const willModifiedData = results.find(({ id }) => id === modifyId);
      const newData = { ...willModifiedData, text, lastModified };
      const newResults = [
        newData,
        ...results.filter(({ id }) => id !== modifyId),
      ];
      return { ...state, results: newResults };
    }

    case 'RECOVER': {
      const { recoverId } = action.payload;
      const { results, deleted } = state;
      const willRecoveredData = deleted.find(({ id }) => id === recoverId);
      const newDeleted = deleted.filter(({ id }) => id !== recoverId);
      const newResults = [...results, willRecoveredData];
      return { ...state, results: newResults, deleted: newDeleted };
    }

    case 'SORT_BY_DATE': {
      const sortedResults = state.results.sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
      );
      return { ...state, results: sortedResults };
    }

    case 'SET': {
      return { ...action.payload };
    }

    case 'SET_PROFILE': {
      const { name, bio } = action.payload;
      return { ...state, profile: { name, bio } };
    }

    default:
      throw Error(`Unhandled action type: "${action.type}".`);
  }
}
