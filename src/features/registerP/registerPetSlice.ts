import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Animal } from "../../assets/custom-hooks/AnimalContext";

interface AnimalRegister {
  pets: Animal[];
}

const initialState: AnimalRegister = {
  pets: [],
};

const registerPetSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerPet: (state, action: PayloadAction<Animal>) => {
      state.pets.push(action.payload);
      localStorage.setItem("animals", JSON.stringify(state.pets));
    },
  },
});

export const { registerPet } = registerPetSlice.actions;
export default registerPetSlice.reducer;
