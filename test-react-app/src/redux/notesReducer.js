import { profileAPI } from "../api/api";
import {
  ADD_NOTE,
  CHANGE_NOTE,
  DELETE_NOTE,
  FETCH_NOTES,
  FETCH_NOTE,
} from "./types";

//-------------------------Initial State--------------------------//
let notesInitialState = {
  notesArray: [],
  note: {},
  newNote: {
    firstName: "",
    secondName: "",
    status: "Busy",
    text: "",
  },
};

//------------------------Actions Creators-------------------------//
export const addNote = (newNote) => ({
  type: ADD_NOTE,
  newNote,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id,
});

export const changeNote = (newNote, id) => ({
  type: CHANGE_NOTE,
  newNote,
  id,
});

export const fetchNote = (payload) => ({
    type: FETCH_NOTE,
    payload,
  });

export const fetchNotes = (payload) => ({
  type: FETCH_NOTES,
  payload,
});

//------------------------Thunks Creators--------------------------//
export const addNoteThunkCreator = (newNote, number) => {
  return (dispatch) => {
    profileAPI.addNote(newNote, number).then((data) => {
      dispatch(addNote({ ...data }));
    });
  };
};

export const changeNoteThunkCreator = (newNote, id) => {
  return (dispatch) => {
    profileAPI.changeNote(newNote, id).then((data) => {
      dispatch(changeNote({ ...data }, id));
    });
  };
};

export const deleteNoteThunkCreator = (id) => {
  return (dispatch) => {
    profileAPI.deleteNote(id).then((data) => {
      dispatch(deleteNote(id));
    });
  };
};

export const fetchNoteThunkCreator = (id) => {
    return (dispatch) => {
      profileAPI.fetchNote(id).then((data) => {
        dispatch(fetchNote(data));
      });
    };
  };

export const fetchNotesThunkCreator = () => {
  return (dispatch) => {
    profileAPI.fetchNotes().then((data) => {
      if (!data) {
        data = [];
      }
      const payload = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });
      dispatch(fetchNotes(payload));
    });
  };
};

//-------------------------Reducer-------------------------------//
const profileReduser = (state = notesInitialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notesArray: [...state.notesArray, action.newNote],
      };
    case CHANGE_NOTE:
      return {
        ...state,
        notesArray: state.notesArray
          .filter((p) => p.id !== action.id)
          .concat([{ ...action.newNote, id: action.id }]),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notesArray: state.notesArray.filter(
          (note) => note.id !== action.id
        ),
      };
    case FETCH_NOTES:
      return {
        ...state,
        notesArray: action.payload,
      };
      case FETCH_NOTE:
        return {
          ...state,
          note: action.payload,
        };
    default:
      return state;
  }
};

export default profileReduser;
