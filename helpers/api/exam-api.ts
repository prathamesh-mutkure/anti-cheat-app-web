import { BASE_URL } from "../../constants";

const getExam = async (examId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/exam/${examId}`);

    const data = await res.json();

    if (!res.ok || data.err) {
      throw new Error(data.err || "Failed to get exam from server!");
    }

    return data;
  } catch (e) {
    throw e;
  }
};

const getAssignedExams = async (userId: string, token: string) => {
  // TODO: handle res.json() error when response not in json

  try {
    const res = await fetch(`${BASE_URL}/${userId}/assignedExams/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok || data.err) {
      throw new Error(data.err || "Failed to get assigned exams from server!");
    }

    return data.exams;
  } catch (e) {
    throw e;
  }
};

export { getExam, getAssignedExams };
