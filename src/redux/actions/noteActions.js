
// Action constants.

export const ADD_Note="ADD Todo";
export const DELETE_NOTE="Toggle Todo";

// Action Creators
export const addNote = (text)=>({text, type:ADD_Note});
export const deleteNote = (index)=>({index, type: DELETE_NOTE});