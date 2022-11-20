import { Results } from "@mediapipe/face_detection";
import { FaceCoordinates } from "./face-detection-helper";

export const NO_CHEATING_RESULT: Results = {
  image: null,
  detections: [
    {
      boundingBox: null,
      landmarks: [
        {
          x: 0.4247371256351471,
          y: 0.44821059703826904,
          z: 0,
        },
        {
          x: 0.5625700950622559,
          y: 0.42130404710769653,
          z: 0,
        },
        {
          x: 0.49543526768684387,
          y: 0.5599270462989807,
          z: 0,
        },
        {
          x: 0.5074736475944519,
          y: 0.6360397934913635,
          z: 0,
        },
        {
          x: 0.36950424313545227,
          y: 0.4804319739341736,
          z: 0,
        },
        {
          x: 0.6576269865036011,
          y: 0.4295254349708557,
          z: 0,
        },
      ],
    },
  ],
};

export const NO_CHEATING_COORD: FaceCoordinates = {
  leftEye: 0.4247371256351471,
  leftEar: 0.36950424313545227,
  rightEye: 0.5625700950622559,
  rightEar: 0.6576269865036011,
};

export const LOOKING_LEFT_RESULT: Results = {
  image: null,
  detections: [
    {
      boundingBox: null,
      landmarks: [
        {
          x: 0.37106189131736755,
          y: 0.5998660922050476,
          z: 0,
        },
        {
          x: 0.5058948397636414,
          y: 0.5860541462898254,
          z: 0,
        },
        {
          x: 0.39298275113105774,
          y: 0.7115006446838379,
          z: 0,
        },
        {
          x: 0.41978755593299866,
          y: 0.8126948475837708,
          z: 0,
        },
        {
          x: 0.37398236989974976,
          y: 0.6430937647819519,
          z: 0,
        },
        {
          x: 0.6752753257751465,
          y: 0.6225096583366394,
          z: 0,
        },
      ],
    },
  ],
};

export const LOOKING_LEFT_COORD: FaceCoordinates = {
  leftEye: 0.37106189131736755,
  leftEar: 0.37398236989974976,
  rightEye: 0.5058948397636414,
  rightEar: 0.6752753257751465,
};

export const LOOKING_RIGHT_RESULT: Results = {
  image: null,
  detections: [
    {
      boundingBox: null,
      landmarks: [
        {
          x: 0.5228339433670044,
          y: 0.5979597568511963,
          z: 0,
        },
        {
          x: 0.6673674583435059,
          y: 0.5859305262565613,
          z: 0,
        },
        {
          x: 0.6551764011383057,
          y: 0.7076786160469055,
          z: 0,
        },
        {
          x: 0.6352774500846863,
          y: 0.8081580996513367,
          z: 0,
        },
        {
          x: 0.3499729335308075,
          y: 0.6533825397491455,
          z: 0,
        },
        {
          x: 0.6666083931922913,
          y: 0.6203935742378235,
          z: 0,
        },
      ],
    },
  ],
};

export const LOOKING_RIGHT_COORD: FaceCoordinates = {
  leftEye: 0.37106189131736755,
  leftEar: 0.37398236989974976,
  rightEye: 0.5058948397636414,
  rightEar: 0.6752753257751465,
};
