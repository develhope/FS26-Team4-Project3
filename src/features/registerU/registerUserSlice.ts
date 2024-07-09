import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
  nome: string;
  cognome: string;
}

interface AccountRegister {
  users: User[];
}

const initialState: AccountRegister = {
  users: [],
};

const registerUserSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { registerUser } = registerUserSlice.actions;
export default registerUserSlice.reducer;
