import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import AppBarExam from "../../components/exam/app-bar-exam";
import ExamButtonsGroup from "../../components/exam/exam-buttons";
import QuestionTracker from "../../components/exam/question-tracker";
import QuestionWidget from "../../components/exam/question-widget";
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
    console.log(exam);
  }, [dispatch, exam]);

  // TODOs:
  //
  // App Bar
  //
  // Question Component
  // Previous & Next Buttons
  //
  // Question tracker
  // Camera
  //
  //
  // Modal Popup for error

  return (
    <React.Fragment>
      <AppBarExam examName={exam.name} />

      <Grid container>
        <Grid item xs={9}>
          <QuestionWidget />
          <ExamButtonsGroup />
        </Grid>

        <Grid item xs={3}>
          <QuestionTracker />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  // TODO: Pass userid and token here
  // Handle error with error prop

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
