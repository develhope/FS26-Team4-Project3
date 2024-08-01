import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logoutUser(state) {
      state.email = "";
      state.password = "";
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
