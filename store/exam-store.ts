import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssignedExam, Exam } from "../models/exam-models";

export interface ExamStore {
  activeExam: {
    exam: Exam;
    currentQuestion: number;
    leftExamCount: number;
    tabChangeCount: number;
    didLeaveExam?: boolean;
    answerKeys: any[];
    countdown?: any;
  };
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
      const activeExam: ExamStore["activeExam"] = {
        exam: action.payload,
        currentQuestion: 0,
        leftExamCount: 0,
        tabChangeCount: 0,
        didLeaveExam: false,
        answerKeys: [],
        countdown: "",
      };

      state.activeExam = activeExam;
    },

    clearActiveExam: (state: ExamStore) => {
      state.activeExam = null;
    },

    goToQuestion: (state: ExamStore, action: PayloadAction<number>) => {
      const questionNo = action.payload;

      if (questionNo < 0 || questionNo >= state.activeExam.exam.questionCount) {
        return;
      }

      state.activeExam.currentQuestion = questionNo;
    },

    nextQuestion: (state: ExamStore) => {
      const { exam, currentQuestion } = state.activeExam;

      if (currentQuestion + 1 === exam.questionCount) {
        return;
      }

      state.activeExam.currentQuestion += 1;
    },

    prevQuestion: (state: ExamStore) => {
      const { exam, currentQuestion } = state.activeExam;

      if (currentQuestion - 1 < 0) {
        return;
      }

      state.activeExam.currentQuestion -= 1;
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
