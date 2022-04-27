import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./Notes/notes";

export const store = configureStore({
  reducer: {
    notes: NotesReducer,
  },
});
