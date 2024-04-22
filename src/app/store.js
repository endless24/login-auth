import { combineSlices, configureStore } from "@reduxjs/toolkit";
import registerSlice from "./feactures/registerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userSlice from "./feactures/userSlice";

//persist storage
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineSlices(registerSlice, userSlice);

const persistedReducer = persistReducer(persistConfig, reducer);

//redux store
export const store = configureStore({
  reducer: persistedReducer,
});
