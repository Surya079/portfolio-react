import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  token: "", // Authentication token
  // User information
  username: "",
  email: "",
  occupation: "",
  role: "", // Role of the user
  isVerified: "", // Email verification status
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, username, email, occupation, role, isVerified } =
        action.payload;

      state.token = token;
      state.username = username;
      state.email = email;
      state.occupation = occupation;
      state.role = role;
      state.isVerified = isVerified;
    },
    clearUser: (state) => {
      state.token = "";
      state.username = "";
      state.email = "";
      state.occupation = "";
      state.role = "";
      state.isVerified = "";
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
