import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    text: "",
    helpText: help,
    readOnly: false,
  },
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    toggleHelp: (state) => {
      state.readOnly = !state.readOnly;
    },
  },
});

export const selectText = (state: RootState) => state.markdown.text;
export const selectHelpText = (state: RootState) => state.markdown.helpText;
export const selectReadOnly = (state: RootState) => state.markdown.readOnly;

export const { changeText, toggleHelp } = markdownSlice.actions;

export default markdownSlice.reducer;
