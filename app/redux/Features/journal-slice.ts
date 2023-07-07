import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  journalBoard: <object[]>[],
};
export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addToJournal: (state, action: PayloadAction<object>) => {
      state.journalBoard.push(action.payload);
    },
  },
});

export const { addToJournal } = journalSlice.actions;
export default journalSlice.reducer;
