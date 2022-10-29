import { Camera } from "@mediapipe/camera_utils";
import { FaceDetection, Results } from "@mediapipe/face_detection";
import { Button } from "@mui/material";
import NextImage from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { b64toBlob } from "../../helpers/face-detection/image-helper";
import classes from "./exam-camera.module.scss";

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
      if (result.detections.length < 1) {
        return;
      } else if (result.detections.length > 1) {
        // TODO: Multiple people warning
        return;
      }

      // result.detections[0].landmarks[i]
      // i value and landmark
      // 0 ---> Left Eye
      // 1 ---> RIght Eye
      // 4 ---> Left Ear
      // 5 ---> Right Ear

      const [leftEye, RightEye, , , leftEar, rightEar] =
        result.detections[0].landmarks;

      console.log(`LEFT EAR: ${leftEar.x}`);
      console.log(`LEFT EYE: ${leftEye.x}`);

      console.log("----------------------");

      console.log(`RIGHT EYE: ${RightEye.x}`);
      console.log(`RIGHT EAR: ${rightEar.x}`);

      const lookingLeft = leftEye.x <= leftEar.x;
      const lookingRight = RightEye.x >= rightEar.x;

      console.log("----------------------");

      console.log(`LOOKING LEFT: ${lookingLeft}`);
      console.log(`LOOKING RIGHT: ${lookingRight}`);

      // console.log(result);
    }

    faceDetection.onResults(onResult);
    faceDetectionRef.current = faceDetection;

    if (webcamRef.current) {
      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          // await faceDetection.send({ image: webcamRef.current.video });
          // TODO: Process after every X frames
          // 10 times in 1 sec preferably
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
      {true && (
        <Webcam
          className={classes.camera}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      )}
      <Button onClick={onResultClick}>Get Result</Button>

      {img_ && <NextImage src={img_} alt="Profile" />}
    </div>
  );
};

export default ExamCamera;
