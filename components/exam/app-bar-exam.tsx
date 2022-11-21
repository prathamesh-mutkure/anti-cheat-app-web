import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ExamTimer from "./exam-timer";
import classes from "./app-bar-exam.module.scss";
import { useAppSelector } from "../../hooks";
import { submitExam } from "../../helpers/api/user-api";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { LoadingBarRef } from "react-top-loading-bar";

// TODO:
//
// Handle Loading statewide
//

interface AppBarExamProps {
  examName: string;
  loadingBarRef: React.RefObject<LoadingBarRef>;
}

const AppBarExam: React.FC<AppBarExamProps> = ({ examName, loadingBarRef }) => {
  const session = useSession();
  const activeExam = useAppSelector((state) => state.exam.activeExam);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onEndExam = async () => {
    setIsLoading(true);
    loadingBarRef.current.continuousStart(50);

    try {
      const result = await submitExam(
        session.data?.user.id,
        activeExam.exam._id,
        activeExam.answerKeys,
        session.data?.user.token
      );

      router.replace("/dashboard");
    } catch (e) {
      console.log(e);
      toast(e.message || "Failed to submit exam, please try again!");
    } finally {
      setIsLoading(false);
      loadingBarRef.current.continuousStart(50);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {examName}
          </Typography>

          <ExamTimer onTimerEnd={onEndExam} />

          <Button
            variant="contained"
            color="warning"
            sx={{
              opacity: isLoading ? 0.8 : 1,
              ml: 3,
            }}
            onClick={onEndExam}
            disabled={isLoading}
            disableElevation
          >
            End Exam
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarExam;
