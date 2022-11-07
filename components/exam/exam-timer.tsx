import React from "react";
import { useAppSelector } from "../../hooks";
import { useTimer } from "react-timer-hook";
import classes from "./exam-timer.module.scss";

interface ExamTimerProps {
  onTimerEnd: () => void;
}

const ExamTimer: React.FC<ExamTimerProps> = ({ onTimerEnd }) => {
  const activeExam = useAppSelector((state) => state.exam.activeExam);

  const examExpiryDate = new Date();
  examExpiryDate.setSeconds(activeExam.expiresOn);

  const { hours, minutes, seconds } = useTimer({
    expiryTimestamp: examExpiryDate,
    onExpire: onTimerEnd,
  });

  return (
    <React.Fragment>
      <p>{`${minutes}:${seconds}`}</p>
    </React.Fragment>
  );
};

export default ExamTimer;
