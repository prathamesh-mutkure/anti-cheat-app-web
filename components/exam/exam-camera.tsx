import { Camera } from "@mediapipe/camera_utils";
import { FaceDetection, Results } from "@mediapipe/face_detection";
import { Button } from "@mui/material";
import NextImage from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Webcam from "react-webcam";
import { b64toBlob } from "../../helpers/face-detection/image-helper";
import classes from "./exam-camera.module.scss";

// TODO: Modularise code
//
// TODO: Make algo more strict using difference between coordinates
//

interface ExamCameraProps {}

const ExamCamera: React.FC<ExamCameraProps> = () => {
  const [img_, setImg_] = useState<string>();
  const webcamRef: React.LegacyRef<Webcam> = useRef();
  const faceDetectionRef = useRef<FaceDetection>(null);
  const realtimeDetection = true;

  const frameRefresh = 1;
  let currentFrame = useRef(0);

  const [chetingStatus, setChetingStatus] = useState("");

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
        toast(
          "Face not detected, make sure your face is visible on the screen!"
        );
        return;
      } else if (result.detections.length > 1) {
        toast(
          "Detected more than one person in frame, can be flagged as cheating!"
        );
        return;
      }

      // result.detections[0].landmarks[i]
      // i ---> landmark
      // 0 ---> Left Eye
      // 1 ---> RIght Eye
      // 4 ---> Left Ear
      // 5 ---> Right Ear

      const [leftEye, RightEye, , , leftEar, rightEar] =
        result.detections[0].landmarks;

      // Move to print data function
      console.log(`LEFT EAR: ${leftEar.x}`);
      console.log(`LEFT EYE: ${leftEye.x}`);

      console.log("----------------------");

      console.log(`RIGHT EYE: ${RightEye.x}`);
      console.log(`RIGHT EAR: ${rightEar.x}`);

      const leftCoordDistance = leftEye.x - leftEar.x;
      const rightCoordDistance = rightEar.x - RightEye.x;

      // const lookingLeft = leftEye.x <= leftEar.x;
      // const lookingRight = RightEye.x >= rightEar.x;

      // The higher the distance, the difficult it is to cheat
      const lookingLeft = leftCoordDistance <= 0.03;
      const lookingRight = rightCoordDistance <= 0.03;

      console.log("----------------------");

      console.log(`LOOKING LEFT: ${lookingLeft}`);
      console.log(`LOOKING RIGHT: ${lookingRight}`);

      if (lookingLeft) {
        setChetingStatus("Cheating Detected: You're looking left");
      } else if (lookingRight) {
        setChetingStatus("Cheating Detected: You're looking right");
      } else {
        setChetingStatus("Everything okay!");
      }
    }

    faceDetection.onResults(onResult);
    faceDetectionRef.current = faceDetection;

    if (webcamRef.current) {
      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          // Proceed frames only if real time detection is on
          if (!realtimeDetection) {
            return;
          }

          currentFrame.current += 1;

          if (currentFrame.current >= frameRefresh) {
            currentFrame.current = 0;
            await faceDetection.send({ image: webcamRef.current.video });
          }
        },
        width: 1280,
        height: 720,
      });

      camera.start();
    }
  }, [webcamRef, realtimeDetection]);

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

      <br />

      <p>Cheating status: {chetingStatus}</p>

      <Button onClick={onResultClick}>Get Result</Button>

      {img_ && <NextImage src={img_} alt="Profile" />}
    </div>
  );
};

export default ExamCamera;
