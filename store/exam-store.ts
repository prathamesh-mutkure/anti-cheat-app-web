import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExamStore {
  currentExam: any;
  assignedExams: any[];
}

const initialState: ExamStore = {
  currentExam: null,
  assignedExams: [],
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setAssignedExams: (
      state: ExamStore,
      action: PayloadAction<typeof initialState.assignedExams>
    ) => {
      state.assignedExams = action.payload;
    },
  },
});

const examActions = examSlice.actions;

export default examSlice;
export { examActions };
