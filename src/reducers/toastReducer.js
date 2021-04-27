import { v4 as uuidv4 } from 'uuid';
import { colors } from '../styles/variables';

export default function toastReducer(state, action) {
  switch (action.type) {
    case 'NOTIFICATION': {
      const newContent = {
        id: uuidv4(),
        type: 'notification',
        color: colors.purple_2,
        text: action.payload,
      };
      return [newContent, ...state];
    }

    case 'ERROR': {
      const newContent = {
        id: uuidv4(),
        type: 'error',
        color: colors.red_2,
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
