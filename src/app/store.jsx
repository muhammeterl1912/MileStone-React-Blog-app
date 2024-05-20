import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../components/features/authSlice";
import blogsReducer from "../components/features/blogsSlice";
import commentsReducer from "../components/features/commentsSlice";
import categoriesReducer from "../components/features/categoriesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedBlogsReducer = persistReducer(persistConfig, blogsReducer);
const persistedCommentsReducer = persistReducer(persistConfig, commentsReducer);
const persistedCategoriesReducer = persistReducer(persistConfig, categoriesReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    blogs: persistedBlogsReducer,
    comments: persistedCommentsReducer,
    categories: persistedCategoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
