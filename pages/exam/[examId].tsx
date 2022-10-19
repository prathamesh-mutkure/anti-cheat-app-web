import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { getExam } from "../../helpers/api/exam-api";
import { useAppDispatch } from "../../hooks";
import { Exam } from "../../models/exam-models";
import { examActions } from "../../store/exam-store";

interface ExamPageProps {
  exam: Exam;
}

const ExamPage: React.FC<ExamPageProps> = ({ exam }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!exam) return;

    dispatch(examActions.setActiveExam(exam));
  }, [dispatch, exam]);

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
