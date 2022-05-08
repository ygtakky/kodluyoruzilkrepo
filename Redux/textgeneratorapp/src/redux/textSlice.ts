import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface parameters {
  count: number;
  HTML: boolean;
}

export const getText = createAsyncThunk(
  "text/getText",
  async (parameters: parameters) => {
    const response = await axios.get(
      `https://baconipsum.com/api/?type=all-meat&paras=${
        parameters.count
      }&format=${parameters.HTML ? "html" : "text"}`
    );
    return response.data;
  }
);

export const textSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
    paragraphCount: 4,
    HTML: false,
  },
  reducers: {
    setParagraphCount: (state, action: PayloadAction<number>) => {
      state.paragraphCount = action.payload;
    },
    setHTML: (state, action: PayloadAction<string>) => {
      if (action.payload == "true") {
        state.HTML = true;
      } else {
        state.HTML = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getText.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.text = action.payload;
      }
    );
  },
});

export const { setParagraphCount, setHTML } = textSlice.actions;

export default textSlice.reducer;
