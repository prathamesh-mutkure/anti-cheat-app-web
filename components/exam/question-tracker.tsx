import { Avatar, Grid } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { examActions } from "../../store/exam-store";
import classes from "./question-tracker.module.scss";

interface QuestionTrackerProps {}

interface QuestionCircleProps {
  questionNumber: number | string;
  onClick?: () => void;
  highlight?: boolean;
}

const QuestionCircle: React.FC<QuestionCircleProps> = ({
  questionNumber,
  onClick,
  highlight = false,
}) => {
  return (
    <>
      <Grid item xs={2} justifyContent="center">
        <Avatar
          onClick={onClick}
          sx={{
            border: highlight ? "solid 3px black" : "",
          }}
        >
          {questionNumber}
        </Avatar>
      </Grid>
    </>
  );
};

const QuestionTracker: React.FC<QuestionTrackerProps> = () => {
  // TODO:
  // Labels for colors of circles

  // TODO: Maybe move highlight logic to circle component

  const dispatch = useAppDispatch();
  const activeExam = useAppSelector((state) => state.exam.activeExam.exam);

  const currentQuestion = useAppSelector(
    (state) => state.exam.activeExam.currentQuestion
  );

  const onClick = (index: number) => {
    dispatch(examActions.goToQuestion(index));
  };

  if (!activeExam) {
    return <p>Error</p>;
  }

  const { questionCount } = activeExam;

  return (
    <React.Fragment>
      <Grid container rowSpacing={2} justifyContent="center">
        {Array.from(Array(questionCount).keys()).map((i) => (
          <QuestionCircle
            key={i}
            questionNumber={i + 1}
            highlight={currentQuestion == i}
            onClick={() => onClick(i)}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default QuestionTracker;
