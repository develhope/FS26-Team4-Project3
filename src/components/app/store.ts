import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../features/login/loginSlice";
import registerReducer from "../../features/register/registerUserSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});
