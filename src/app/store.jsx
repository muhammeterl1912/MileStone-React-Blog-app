import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import authReducer from "../components/features/authSlice";
import blogsReducer from "../components/features/blogsSlice";
import commentsReducer from "../components/features/commentsSlice";
import categoriesReducer from "../components/features/categoriesSlice";

const authPersistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  blogs: blogsReducer,
  comments: commentsReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["FLUSH", "REHYDRATE", "PAUSE", "PERSIST", "PURGE", "REGISTER"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
