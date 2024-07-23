import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../features/login/loginSlice";
import registerUserReducer from "../../features/registerU/registerUserSlice";
import registerPetReducer from "../../features/registerP/registerPetSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    registerU: registerUserReducer,
    registerP: registerPetReducer,
  },
});
