import React from "react";
import Webcam from "react-webcam";
import classes from "./exam-camera.module.scss";

interface ExamCameraProps {}

const ExamCamera: React.FC<ExamCameraProps> = () => {
  return (
    <div>
      <Webcam className={classes.camera} />
    </div>
  );
};

export default ExamCamera;
