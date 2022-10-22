import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks";
import classes from "./question-widget.module.scss";

interface QuestionWidgetProp {}

const QuestionWidget: React.FC<QuestionWidgetProp> = () => {
  const activeExam = useAppSelector((state) => state.exam.activeExam.exam);
  const currentQuestion = useAppSelector(
    (state) => state.exam.activeExam.currentQuestion
  );

  if (!activeExam?.questions) {
    return <p>No Question!</p>;
  }

  const { questions } = activeExam;
  const question = questions[currentQuestion];

  return (
    <React.Fragment>
      <p>{`${currentQuestion + 1}. ${question.title}`}</p>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
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
    </React.Fragment>
  );
};

export default QuestionWidget;
