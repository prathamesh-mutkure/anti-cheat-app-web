import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface UserState {
  user: {
    id: string;
    fname: string;
    lname: string;
  };
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: { id: null, fname: null, lname: null },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (
      state: UserState,
      action: PayloadAction<typeof initialState.user>
    ) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    removeUser: (state: UserState) => {
      state = initialState;
    },
  },
});

const userActions = userSlice.actions;

export default userSlice;
export { userActions };
