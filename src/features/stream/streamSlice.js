import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createStream: null,
};

export const streamSlice = createSlice({
  name: "stream",
  initialState,
  reducers: {
    createStream: (state, action) => {
      state.createStream = action.payload;
    },
  },
});

export const { createStream } = streamSlice.actions;
export default streamSlice.reducer;
