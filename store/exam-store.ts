import { createSlice } from "@reduxjs/toolkit";

export interface ExamStore {
  currentExam: {};
  assignedExams: [];
}

const initialState: ExamStore = {
  currentExam: null,
  assignedExams: [],
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {},
});

const examActions = examSlice.actions;

export default examSlice;
export { examActions };
