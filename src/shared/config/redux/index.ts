import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modalSlice from "./slices/modalSlice";


export const store = configureStore({
  reducer: {
    menu: menuSlice,
    modal: modalSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;