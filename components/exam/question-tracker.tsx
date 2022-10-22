import { Avatar, Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks";
import classes from "./question-tracker.module.scss";

interface QuestionTrackerProps {}

interface QuestionCircleProps {
  questionNumber: number | string;
  highlight?: boolean;
}

const QuestionCircle: React.FC<QuestionCircleProps> = ({
  questionNumber,
  highlight = false,
}) => {
  return (
    <>
      <Grid item xs={2} justifyContent="center">
        <Avatar
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
  // Save answes using onChange of <Radio>

  const activeExam = useAppSelector((state) => state.exam.activeExam.exam);
  const currentQuestion = useAppSelector(
    (state) => state.exam.activeExam.currentQuestion
  );

  if (!activeExam) {
    return <p>Error</p>;
  }

  const { questionCount } = activeExam;

  // TODO: Maybe move highlight logic to circle component

  return (
    <React.Fragment>
      <Grid container rowSpacing={2} justifyContent="center">
        {Array.from(Array(questionCount).keys()).map((i) => (
          <QuestionCircle
            key={i}
            questionNumber={i + 1}
            highlight={currentQuestion == i}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default QuestionTracker;
