import { createSlice } from "@reduxjs/toolkit";

export interface UserState {}

const initialState: UserState = {};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

const userActions = userSlice.actions;

export default userSlice;
export { userActions };
