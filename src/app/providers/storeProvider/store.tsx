import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./stateSchema";
import { baseApi } from "@/shared/api";

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    api: baseApi.reducer,
  };
  const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: (gDM) => gDM().concat(baseApi.middleware),
  });
  return store;
};
