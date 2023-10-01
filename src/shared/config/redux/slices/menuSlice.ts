import { createSlice } from "@reduxjs/toolkit";


export interface MenuState {
  isOpen: boolean
}

const initialState: MenuState = {
  isOpen: false
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuOpen: (state) => {
      state.isOpen = true;
    },
    setMenuClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setMenuOpen, setMenuClose } = menuSlice.actions;
export default menuSlice.reducer;