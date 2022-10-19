import { BASE_URL } from "../../constants";

const getExam = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/login`);

    const data = await res.json();

    return {
      ...data,
    };
  } catch (e) {
    throw e;
  }
};

const getAssignedExams = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/login`);

    const data = await res.json();

    return {
      ...data,
    };
  } catch (e) {
    throw e;
  }
};

export { getExam };
