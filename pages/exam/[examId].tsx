import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import AppBarExam from "../../components/exam/app-bar-exam";
import ExamButtonsGroup from "../../components/exam/exam-buttons";
import ExamCamera from "../../components/exam/exam-camera";
import QuestionTracker from "../../components/exam/question-tracker";
import QuestionWidget from "../../components/exam/question-widget";
import { getExam } from "../../helpers/api/exam-api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Exam } from "../../models/exam-models";
import { examActions } from "../../store/exam-store";
import { toast } from "react-toastify";
import {
  getBrowserDocumentHiddenProp,
  getBrowserVisibilityProp,
  getVisibilityEventNames,
  usePageVisibility,
} from "../../helpers/app/visibility-event";
import WarningModal from "../../components/exam/exam-modals";
import { useRouter } from "next/router";
import Head from "next/head";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

const TESTING = false;

// TODO (CHEAT DETECTION):
//
// If change tab more than 3 times, submit exam
//
// Disable back button
//
// Save answer keys and timer after every answer selection
// Create new API for it
//
// If user starts exam again without submitting exam, then
// Then load answers and keys
// Only within given time period of exam
//
// Cannot give exam again after submitting
// TODO (UI):
//
// This screen should be full screen
// Timer state changes saved every 30 secs
//
// Block interactions while loading
//

interface ExamPageProps {
  exam: Exam;
  error: string;
}

const ExamPage: React.FC<ExamPageProps> = ({ exam, error }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const loadingBarRef: React.Ref<LoadingBarRef> = useRef(null);

  const activeExam = useAppSelector((state) => state.exam.activeExam);

  const [didLeaveExam, setDidLeaveExam] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<{
    title: string;
    description: string;
  }>();

  // Load exam into state
  useEffect(() => {
    if (!exam) return;

    dispatch(examActions.setActiveExam(exam));

    return () => {
      dispatch(examActions.clearActiveExam());
    };
  }, [dispatch, exam]);

  // Prevent refresh
  useEffect(() => {
    const beforeUnloadEventHandler = (event: BeforeUnloadEvent) => {
      event.preventDefault();

      const warningMessage = "Are you sure you want to leave the exam?";

      if (event) {
        event.returnValue = warningMessage; // Legacy method for cross browser support
      }

      return warningMessage;
    };

    window.addEventListener("beforeunload", beforeUnloadEventHandler, {
      capture: true,
    });

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadEventHandler, {
        capture: true,
      });
    };
  }, []);

  // Tab change
  useEffect(() => {
    const hiddenProp = getBrowserDocumentHiddenProp();
    const visibilityChangeEventName = getBrowserVisibilityProp();

    const handleVisibilityChange = () => {
      if (document[hiddenProp]) {
        setDidLeaveExam(true);
      } else {
        showModal(
          "WAARNING!",
          "Leaving exam multiple times may be flagged as cheating!"
        );
      }
    };

    document.addEventListener(
      visibilityChangeEventName,
      handleVisibilityChange,
      false
    );

    return () => {
      document.removeEventListener(
        visibilityChangeEventName,
        handleVisibilityChange
      );
    };
  }, []);

  const showModal = (title: string, description: string) => {
    setIsModalVisible(true);
    setModalData({
      title,
      description,
    });
  };

  const hideModel = () => {
    if (!didLeaveExam) {
      return;
    }

    setIsModalVisible(false);
    setModalData({
      title: "",
      description: "",
    });

    dispatch(examActions.increaseTabChangeCount());

    if (activeExam.tabChangeCount > 3) {
      toast("You've changed tab more than 3 times, submiting exam!");
      // TODO: submit exam
    }
  };

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
      <Head>
        <title>{exam.name}</title>
      </Head>

      <LoadingBar color="#ffffff" ref={loadingBarRef} />

      <AppBarExam
        examName={activeExam.exam.name}
        loadingBarRef={loadingBarRef}
      />

      <Grid
        container
        direction="row"
        sx={{
          height: "calc(100% - 4rem)",
        }}
      >
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            height="100%"
            justifyContent="space-between"
          >
            <Grid item>
              <QuestionWidget />
            </Grid>
            <Grid item>
              <ExamButtonsGroup />
              {/* <p>Exam Leave Count: {activeExam.tabChangeCount}</p> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            height="100%"
            justifyContent="space-between"
          >
            <Grid item>
              <QuestionTracker />
            </Grid>
            <Grid item>
              <ExamCamera />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Disabled for testing */}
      {!TESTING && (
        <WarningModal
          open={isModalVisible}
          title={modalData?.title}
          description={modalData?.description}
          onClose={hideModel}
        />
      )}
    </React.Fragment>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  // TODO: Pass query "redirect_to", and use that for redirection
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
    const exam = await getExam(
      session.user.id,
      examId.toString(),
      session.user.token
    );

    if (!exam) {
      throw new Error("Failed to get exam!");
    }

    return {
      props: {
        exam: exam,
        error: null,
      },
    };
  } catch (e) {
    return {
      props: {
        exam: null,
        error: e.message ?? "Failed to get exam!",
      },
    };
  }
};

export default ExamPage;
export { getServerSideProps };
