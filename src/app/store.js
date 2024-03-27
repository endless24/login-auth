import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./feactures/registerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./feactures/userSlice";

//persist storage
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  registerReducer,
  userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

//redux store
export const store = configureStore({
  reducer: persistedReducer,
});
