import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { getExam } from "../../helpers/api/exam-api";
import { Exam } from "../../models/exam-models";

interface ExamPageProps {
  exam: Exam;
}

const ExamPage: React.FC<ExamPageProps> = ({ exam }) => {
  useEffect(() => {
    // TODO: Set Active exam in store
  }, []);

  return (
    <div>
      <h1>Exam Page</h1>
      <h3>{exam.name}</h3>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const { examId } = context.params;

  const exam = await getExam(examId.toString());

  return {
    props: {
      exam: exam,
    },
  };
};

export default ExamPage;
export { getServerSideProps };
