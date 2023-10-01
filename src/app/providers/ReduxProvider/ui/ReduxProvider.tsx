"use client";
import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import { store } from "shared/config/redux";

export const ReduxProvider: FC<{children: ReactNode}> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
}

