import { ADD_NOTE } from '../actions/notes';

const initialState = {
  notes: []
};

const notesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { notes } = state;

  switch (type) {
    case ADD_NOTE:
      return {
        notes: [...notes, payload]
      };

    default:
      return state;
  }
};

export default notesReducer;
