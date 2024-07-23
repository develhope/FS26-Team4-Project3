import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompleteUser } from "../../assets/custom-hooks/LoginContext";

interface AccountRegister {
  users: CompleteUser[];
}

const initialState: AccountRegister = {
  users: [],
};

const registerUserSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<CompleteUser>) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { registerUser } = registerUserSlice.actions;
export default registerUserSlice.reducer;
