import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import AppBarExam from "../../components/exam/app-bar-exam";
import ExamButtonsGroup from "../../components/exam/exam-buttons";
import QuestionTracker from "../../components/exam/question-tracker";
import QuestionWidget from "../../components/exam/question-widget";
import { getExam } from "../../helpers/api/exam-api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Exam } from "../../models/exam-models";
import { examActions } from "../../store/exam-store";

interface ExamPageProps {
  exam: Exam;
  error: string;
}

const ExamPage: React.FC<ExamPageProps> = ({ exam, error }) => {
  // TODO:
  // This screen should be full screen
  // Timer state changes every 30 secs

  const dispatch = useAppDispatch();
  const activeExam = useAppSelector((state) => state.exam.activeExam);

  useEffect(() => {
    if (!exam) return;

    dispatch(examActions.setActiveExam(exam));

    return () => {
      dispatch(examActions.clearActiveExam());
    };
  }, [dispatch, exam]);

  // TODOs:
  //
  // App Bar ... DONE
  //
  // Question Component ... DONE
  // Previous & Next Buttons ... DONE
  //
  // Question tracker ... DONE
  // Camera
  //
  // Make everything responsive ...DONE
  //
  // Modal Popup for warning

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!activeExam) {
    return <p>Loading...</p>;
  }

  if (activeExam.exam._id !== exam._id) {
    return <p>Error!</p>;
  }

  return (
    <React.Fragment>
      <AppBarExam examName={activeExam.exam.name} />

      <Grid container>
        <Grid item xs={9}>
          <QuestionWidget />
          <ExamButtonsGroup />
        </Grid>

        <Grid item xs={3}>
          <QuestionTracker />
          {/* Camera Here */}
          <Webcam />
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

  const { examId } = context.params;

  try {
    const exam = await getExam(examId.toString());

    console.log(exam);

    return {
      props: {
        exam: exam,
        error: null,
      },
    };
  } catch (e) {
    // TODO: Return error message in error prop
    // For all getServerSideProp checks
    return {
      props: {
        exam: null,
        error: "Failed to get exam!",
      },
    };
  }
};

export default ExamPage;
export { getServerSideProps };
