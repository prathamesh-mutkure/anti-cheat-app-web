import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AssignedExam {
  _id: string;
  questionCount: number;
  name: string;
  startDate: string;
  endData: string;
  duration: number;
  status: string;
}

export interface ExamStore {
  currentExam: any;
  assignedExams: AssignedExam[];
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
