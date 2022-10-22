import {
  FaceDetection,
  Results,
  ResultsListener,
} from "@mediapipe/face_detection";
import { Button } from "@mui/material";
import NextImage from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import classes from "./exam-camera.module.scss";
// const base64Img = require("base64-img");

interface ExamCameraProps {}

const ExamCamera: React.FC<ExamCameraProps> = () => {
  const webcamRef: React.LegacyRef<Webcam> = useRef();
  const faceDetection: FaceDetection = new FaceDetection();
  const [img_, setImg_] = useState<string>();

  faceDetection.setOptions({
    minDetectionConfidence: 0.5,
  });

  function onResult(result: Results) {
    console.log(result);
  }

  faceDetection.onResults(onResult);

  const b64toBlob = async (base64) => fetch(base64).then((res) => res.blob());

  const onResultClick = async () => {
    const imgSrc = webcamRef.current.getScreenshot();

    const blob = await b64toBlob(imgSrc);
    const img = new Image();

    const src = URL.createObjectURL(blob);
    img.src = src;

    setImg_(src);
    await faceDetection.send({ image: img });
  };

  return (
    <div>
      <Webcam
        className={classes.camera}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <Button onClick={onResultClick}>Get Result</Button>

      {img_ && <NextImage src={img_} alt="Profile" />}
    </div>
  );
};

export default ExamCamera;
