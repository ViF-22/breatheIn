import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type InitialState = {
//   value: NoteState;
// };

// type NoteState = {
//   mood: string;
//   date: string;
//   id: string;
// };
const initialState = {
  moodBoard: <object[]>[],
};

export const moodSlice = createSlice({
  name: "mood", //this name will be used in page.tsx
  initialState,
  reducers: {
    add: (state, action: PayloadAction<object>) => {
      state.moodBoard.push(action.payload);
    },
  },
});

export const { add } = moodSlice.actions; //import actions to be used in dispatch functions
export default moodSlice.reducer; //import for use in main.jsx reducers
