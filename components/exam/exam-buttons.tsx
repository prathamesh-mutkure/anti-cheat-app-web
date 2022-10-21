import { Button, Grid } from "@mui/material";
import React from "react";
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
  // TODO: Implement below functions
  // Incorporate activeQuestion index

  const onPreviousClicked = () => {};

  const onNextClicked = () => {};

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
