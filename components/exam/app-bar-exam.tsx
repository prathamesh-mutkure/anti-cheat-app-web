import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ExamTimer from "./exam-timer";
import classes from "./app-bar-exam.module.scss";
import { useAppSelector } from "../../hooks";
import { submitExam } from "../../helpers/api/user-api";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

// TODO:
//
// Handle Loading statewide
//

interface AppBarExamProps {
  examName: string;
}

const AppBarExam: React.FC<AppBarExamProps> = ({ examName }) => {
  const session = useSession();
  const activeExam = useAppSelector((state) => state.exam.activeExam);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onEndExam = async () => {
    setIsLoading(true);

    try {
      const result = await submitExam(
        "1800760308",
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
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {examName}
          </Typography>

          <ExamTimer onTimerEnd={onEndExam} />

          <Button
            color="inherit"
            sx={{
              backgroundColor: "red",
              opacity: isLoading ? 0.8 : 1,
            }}
            onClick={onEndExam}
            disabled={isLoading}
          >
            End Exam
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarExam;
