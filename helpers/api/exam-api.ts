import { BASE_URL } from "../../constants";

const getExam = async (examId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/exam/${examId}`);

    const data = await res.json();

    return data;
  } catch (e) {
    throw e;
  }
};

const getAssignedExams = async (userId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}/assignedExams/all`);

    const data = await res.json();

    return data.exams;
  } catch (e) {
    throw e;
  }
};

export { getExam, getAssignedExams };
