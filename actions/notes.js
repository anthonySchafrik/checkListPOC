export const ADD_NOTE = 'notes/ADD_NOTE';

export const addNote = noteObject => {
  return {
    type: ADD_NOTE,
    payload: noteObject
  };
};
