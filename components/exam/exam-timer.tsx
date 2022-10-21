import React from "react";
import classes from "./exam-timer.module.scss";

interface ExamTimerProps {}

const ExamTimer: React.FC<ExamTimerProps> = () => {
  return (
    <React.Fragment>
      <p>30:00</p>
    </React.Fragment>
  );
};

export default ExamTimer;
