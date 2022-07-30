import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    signOut: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
