import { Avatar, Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks";
import classes from "./question-tracker.module.scss";

interface QuestionTrackerProps {}

interface QuestionCircleProps {
  questionNumber: number | string;
}

const QuestionCircle: React.FC<QuestionCircleProps> = ({ questionNumber }) => {
  return (
    <>
      <Grid item xs={2} justifyContent="center">
        <Avatar>{questionNumber}</Avatar>
      </Grid>
    </>
  );
};

const QuestionTracker: React.FC<QuestionTrackerProps> = () => {
  const questionCount = useAppSelector(
    (state) => state.exam.activeExam.questionCount
  );

  return (
    <React.Fragment>
      <Grid container rowSpacing={2} justifyContent="center">
        {Array.from(Array(questionCount).keys()).map((i) => (
          <QuestionCircle key={i} questionNumber={i + 1} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default QuestionTracker;
