import { Button, Grid } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../hooks";
import { examActions } from "../../store/exam-store";
import classes from "./exam-buttons.module.scss";

interface ExamButtonsGroupProps {}

interface ExamButtonProps {
  label: string;
  onTap: () => void;
  color: string;
}

const ExamButton: React.FC<ExamButtonProps> = ({ label, onTap, color }) => {
  return (
    <Grid item>
      <Button
        sx={{
          backgroundColor: color,
          color: "white",
        }}
        onClick={onTap}
      >
        {label}
      </Button>
    </Grid>
  );
};

const ExamButtonsGroup: React.FC<ExamButtonsGroupProps> = () => {
  const dispatch = useAppDispatch();

  const onPreviousClicked = () => {
    dispatch(examActions.prevQuestion());
  };

  const onNextClicked = () => {
    dispatch(examActions.nextQuestion());
  };

  return (
    <React.Fragment>
      <Grid container>
        <ExamButton label="Previous" onTap={onPreviousClicked} color="grey" />
        <ExamButton label="Next" onTap={onNextClicked} color="purple" />
      </Grid>
    </React.Fragment>
  );
};

export default ExamButtonsGroup;
