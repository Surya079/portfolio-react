import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  token: "", // Authentication token
  userId: "",
  profilePicture: "",
  username: "",
  occupation: "",
  role: "", // Role of the user
  isVerified: "", // Email verification status
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        token,
        username,
        userId,
        profilePicture,
        occupation,
        role,
        isVerified,
      } = action.payload;

      state.token = token;
      state.username = username;
      state.occupation = occupation;
      state.role = role;
      state.isVerified = isVerified;
      state.userId = userId;
      state.profilePicture = profilePicture;
    },
    clearUser: (state) => {
      state.token = "";
      state.username = "";
      state.occupation = "";
      state.role = "";
      state.isVerified = "";
      state.userId = "";
      state.profilePicture = "";
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
