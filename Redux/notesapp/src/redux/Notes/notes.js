import { createSlice, nanoid } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    filter: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push({
        id: nanoid(),
        note: action.payload.note,
        color: action.payload.color,
      });
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addNote, setFilter } = notesSlice.actions;

export default notesSlice.reducer;
