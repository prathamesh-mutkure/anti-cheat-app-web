import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ExamTimer from "./exam-timer";
import classes from "./app-bar-exam.module.scss";
import { useAppSelector } from "../../hooks";

interface AppBarExamProps {
  examName: string;
}

const AppBarExam: React.FC<AppBarExamProps> = ({ examName }) => {
  const activeExam = useAppSelector((state) => state.exam.activeExam);

  const onEndExam = () => {
    console.log(activeExam.answerKeys);
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

          <ExamTimer />

          <Button
            color="inherit"
            sx={{
              backgroundColor: "red",
            }}
            onClick={onEndExam}
          >
            End Exam
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarExam;
