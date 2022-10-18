import { configureStore } from "@reduxjs/toolkit";
import examSlice from "./exam-store";
import userSlice from "./user-store";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    exam: examSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
