import { ReactNode } from "react";
import { createStore } from "./store";
import { Provider } from "react-redux";
type StoreProviderProps = {
  children: ReactNode;
};
export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const store = createStore();
  return <Provider store={store}>{children}</Provider>;
};
