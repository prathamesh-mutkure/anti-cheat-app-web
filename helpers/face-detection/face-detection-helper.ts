import { Results } from "@mediapipe/face_detection";

export interface FaceCoordinates {
  leftEye: number;
  leftEar: number;
  rightEye: number;
  rightEar: number;
}

export const extractFaceCoordinates = (result: Results): FaceCoordinates => {
  if (result.detections.length < 1) {
    return;
  }

  // result.detections[0].landmarks[i]
  // i ---> landmark
  // 0 ---> Left Eye
  // 1 ---> Right Eye
  // 2 ---> Mouth
  // 3 ---> Chin
  // 4 ---> Left Ear
  // 5 ---> Right Ear

  const [leftEye, rightEye, , , leftEar, rightEar] =
    result.detections[0].landmarks;

  return {
    leftEye: leftEye.x,
    leftEar: leftEar.x,
    rightEye: rightEye.x,
    rightEar: rightEar.x,
  };
};

export const printLandmarks = (result: Results) => {
  if (result.detections.length < 1) {
    return;
  }

  const { leftEar, leftEye, rightEar, rightEye } =
    extractFaceCoordinates(result);

  console.log("----------------------");
  console.log(`LEFT EAR: ${leftEar}`);
  console.log(`LEFT EYE: ${leftEye}`);
  console.log("----------------------");
  console.log(`RIGHT EYE: ${rightEye}`);
  console.log(`RIGHT EAR: ${rightEar}`);
  console.log("----------------------");
};

export const detectCheating = (
  faceCoordinates: FaceCoordinates,
  printRefults: boolean = false
) => {
  const { leftEar, leftEye, rightEar, rightEye } = faceCoordinates;

  const leftCoordDistance = leftEye - leftEar;
  const rightCoordDistance = rightEar - rightEye;

  // Old Approcah: ears and eyes crossing
  // const lookingLeft = leftEye.x <= leftEar.x;
  // const lookingRight = RightEye.x >= rightEar.x;

  // The higher the distance, the difficult it is to cheat
  const lookingLeft = leftCoordDistance <= 0.03;
  const lookingRight = rightCoordDistance <= 0.03;

  if (printRefults) {
    console.log("----------------------");
    console.log(`LOOKING LEFT: ${lookingLeft}`);
    console.log(`LOOKING RIGHT: ${lookingRight}`);
    console.log("----------------------");
  }

  return [lookingLeft, lookingRight];
};

export const getCheatingStatus = (
  lookingLeft: boolean,
  lookingRight: boolean
): string => {
  if (lookingLeft) return "Cheating Detected: You're looking left";
  else if (lookingRight) return "Cheating Detected: You're looking right";
  else return "Everything okay!";
};

export const b64toBlob = async (base64: string) =>
  fetch(base64).then((res) => res.blob());
