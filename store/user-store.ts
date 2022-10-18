import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

const userActions = userSlice.actions;

export default userSlice;
export { userActions };
