import { Camera } from "@mediapipe/camera_utils";
import {
  FaceDetection,
  Results,
  ResultsListener,
} from "@mediapipe/face_detection";
import { Button } from "@mui/material";
import NextImage from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { b64toBlob } from "../../helpers/face-detection/image-helper";
import classes from "./exam-camera.module.scss";
// const base64Img = require("base64-img");

interface ExamCameraProps {}

const ExamCamera: React.FC<ExamCameraProps> = () => {
  const [img_, setImg_] = useState<string>();
  const webcamRef: React.LegacyRef<Webcam> = useRef();
  const faceDetectionRef = useRef<FaceDetection>(null);

  useEffect(() => {
    const faceDetection: FaceDetection = new FaceDetection({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`;
      },
    });

    faceDetection.setOptions({
      minDetectionConfidence: 0.5,
      model: "short",
    });

    function onResult(result: Results) {
      console.log(result);
    }

    faceDetection.onResults(onResult);
    faceDetectionRef.current = faceDetection;

    if (!webcamRef.current) {
      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          // await faceDetection.send({ image: webcamRef.current.video });
        },
        width: 1280,
        height: 720,
      });

      camera.start();
    }
  }, [webcamRef]);

  const onResultClick = async () => {
    // const imgSrc = webcamRef.current.getScreenshot();
    // const blob = await b64toBlob(imgSrc);
    // const img = new Image(600, 400);
    // const src = URL.createObjectURL(blob);
    // img.src = src;
    // setImg_(src);

    await faceDetectionRef?.current?.send({ image: webcamRef.current.video });
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
