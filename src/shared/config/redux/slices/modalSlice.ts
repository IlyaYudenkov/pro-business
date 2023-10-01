import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalType = "diplom" | "portfolio" | "order" | "not stated"

export interface ModalState {
  isOpen: boolean,
  type: ModalType,
  id: number | null;
}

const initialState: ModalState = {
  isOpen: false,
  type: "not stated",
  id: null
};

// открываем modalWizard, который, в зависимости от типа, откроет модальное окно со своим наполнением

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state, { payload }: PayloadAction<Omit<ModalState, 'isOpen'>>) => {
      state.isOpen = true;
      state.id = payload.id;
      state.type = payload.type;
    },
    
    setModalClose: (state) => initialState
  },
});

export const { setModalClose, setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;