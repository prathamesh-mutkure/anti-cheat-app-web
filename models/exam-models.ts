export interface Question {
  title: string;
  options: any;
}

export interface Exam {
  questions: Question[];
  questionCount: number;
  _id: string;
  name: string;
  startDate: string;
  endData: string;
  duration: number;
}

export interface AssignedExam {
  _id: string;
  questionCount: number;
  name: string;
  startDate: string;
  endDate: string;
  duration: number;
  status: string;
}
