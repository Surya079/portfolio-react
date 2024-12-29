import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./slice/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const PersistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(PersistConfig, authSlice.reducer);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);

const persistor = persistStore(store);

export { persistor, store };
