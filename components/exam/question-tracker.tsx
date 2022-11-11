import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { examActions } from "../../store/exam-store";
import classes from "./question-tracker.module.scss";

interface QuestionTrackerProps {}

interface QuestionCircleProps {
  questionNumber: number | string;
  onClick?: () => void;
  highlight?: boolean;
  isAnswered: boolean;
}

const QuestionCircle: React.FC<QuestionCircleProps> = ({
  questionNumber,
  onClick,
  highlight = false,
  isAnswered = false,
}) => {
  return (
    <>
      <Grid item xs={2} justifyContent="center">
        <Avatar
          onClick={onClick}
          sx={{
            border: highlight ? "solid 3px black" : "",
            backgroundColor: isAnswered ? "green" : "red",
          }}
        >
          {questionNumber}
        </Avatar>
      </Grid>
    </>
  );
};

const QuestionTracker: React.FC<QuestionTrackerProps> = () => {
  const dispatch = useAppDispatch();
  const activeExam = useAppSelector((state) => state.exam.activeExam);

  const currentQuestion = useAppSelector(
    (state) => state.exam.activeExam.currentQuestion
  );

  const onClick = (index: number) => {
    dispatch(examActions.goToQuestion(index));
  };

  if (!activeExam.exam) {
    return <p>Error</p>;
  }

  const { questionCount } = activeExam.exam;

  return (
    <div className={classes.quesTracker}>
      <div className={classes.questionCircles}>
        <Grid container rowSpacing={2} justifyContent="center">
          {Array.from(Array(questionCount).keys()).map((i) => (
            <QuestionCircle
              key={i}
              questionNumber={i + 1}
              highlight={currentQuestion == i}
              onClick={() => onClick(i)}
              isAnswered={activeExam.answerKeys[i] !== null}
            />
          ))}
        </Grid>
      </div>

      <div className={classes.questionCirclesLabel}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar
                sx={{
                  backgroundColor: "green",
                }}
              >
                {" "}
              </Avatar>
            </ListItemIcon>
            <ListItemText>Answered</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar
                sx={{
                  backgroundColor: "red",
                }}
              >
                {" "}
              </Avatar>
            </ListItemIcon>
            <ListItemText>Not Answered</ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default QuestionTracker;
