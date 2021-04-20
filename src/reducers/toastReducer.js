import { v4 as uuidv4 } from 'uuid';
import { colors } from '../styles/variables';

export default function toastReducer(state, action) {
    
  switch (action.type) {
    case 'ADD_NOTE': {
      const newContent = {
        id: uuidv4(),
        type: 'notification',
        color: colors.purple_2,
        text: 'Note has been added.',
      };
      return [...state, newContent];
    }
    case 'REMOVE_CONTENT': {
      return state.filter(({ id }) => id !== action.payload);
    }
    case 'ERROR': {
      const newContent = {
        id: uuidv4(),
        type: 'error',
        color: colors.purple_2,
        text: 'An error occurred.',
      };
      return [...state, newContent];
    }

    default:
      throw Error('Unhandled action type!');
  }
}
