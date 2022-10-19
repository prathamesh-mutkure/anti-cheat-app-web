import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssignedExam, Exam } from "../models/exam-models";

export interface ExamStore {
  activeExam: Exam;
  assignedExams: AssignedExam[];
}

const initialState: ExamStore = {
  activeExam: null,
  assignedExams: [],
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setActiveExam: (state: ExamStore, action: PayloadAction<Exam>) => {
      state.activeExam = action.payload;
    },

    clearActiveExam: (state: ExamStore) => {
      state.activeExam = null;
    },

    setAssignedExams: (
      state: ExamStore,
      action: PayloadAction<AssignedExam[]>
    ) => {
      state.assignedExams = action.payload;
    },

    clearAssignedExams: (state: ExamStore) => {
      state.assignedExams = [];
    },
  },
});

const examActions = examSlice.actions;

export default examSlice;
export { examActions };
