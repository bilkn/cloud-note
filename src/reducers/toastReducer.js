import { v4 as uuidv4 } from 'uuid';

export default function toastReducer(state, action) {
  switch (action.type) {
    case 'NOTIFICATION': {
      const newContent = {
        id: uuidv4(),
        type: 'notification',
        text: action.payload,
      };
      return [newContent, ...state];
    }

    case 'ERROR': {
      const newContent = {
        id: uuidv4(),
        type: 'error',
        text: 'An error occurred.',
      };
      return [newContent, ...state];
    }

    case 'REMOVE_CONTENT': {
      return state.filter(({ id }) => id !== action.payload);
    }

    default:
      throw Error(`Unhandled action type: ${action.type}!`);
  }
}
