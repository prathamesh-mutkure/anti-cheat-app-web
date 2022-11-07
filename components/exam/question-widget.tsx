import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { examActions } from "../../store/exam-store";
import classes from "./question-widget.module.scss";

interface QuestionWidgetProp {}

const QuestionWidget: React.FC<QuestionWidgetProp> = () => {
  const dispatch = useAppDispatch();
  const activeExam = useAppSelector((state) => state.exam.activeExam);
  const currentQuestion = useAppSelector(
    (state) => state.exam.activeExam.currentQuestion
  );

  if (!activeExam?.exam?.questions) {
    return <p>No Question!</p>;
  }

  const {
    exam: { questions },
    answerKeys,
  } = activeExam;

  const question = questions[currentQuestion];

  const onAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    val: string
  ) => {
    dispatch(
      examActions.setAnswer({ questionNo: currentQuestion, answerKey: val })
    );
  };

  return (
    <div className={classes.questionWidget}>
      <Typography
        className={classes.question}
        sx={{
          marginBottom: "2rem",
        }}
      >
        {`${currentQuestion + 1}. ${question.title}`}
      </Typography>

      <div className={classes.optionsGroup}>
        <FormControl>
          <RadioGroup
            value={answerKeys[currentQuestion]}
            onChange={onAnswerChange}
          >
            {Object.entries(question.options).map(
              ([option, label]: [string, string]) => {
                return (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={label}
                  />
                );
              }
            )}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default QuestionWidget;
