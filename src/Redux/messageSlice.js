import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  messages: [],
};

const messageSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    saveMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});
const { actions, reducer } = messageSlice;
export const { saveMessage } = actions;
export default reducer;
