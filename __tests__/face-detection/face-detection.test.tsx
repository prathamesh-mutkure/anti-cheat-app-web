import {
  LOOKING_LEFT_RESULT,
  LOOKING_RIGHT_RESULT,
  NO_CHEATING_RESULT,
} from "../../helpers/face-detection/face-detection-constants";
import {
  detectCheating,
  extractFaceCoordinates,
} from "../../helpers/face-detection/face-detection-helper";

describe("Face Detection...", () => {
  it("should return [false, false] when looking at screen", async () => {
    expect(NO_CHEATING_RESULT.detections.length).toBe(1);

    const faceCoordinates = extractFaceCoordinates(NO_CHEATING_RESULT);
    const [lookingLeft, lookingRight] = detectCheating(faceCoordinates);

    expect(lookingLeft).toBe(false);
    expect(lookingRight).toBe(false);
  });

  it("should return [true, false] when looking left", async () => {
    expect(LOOKING_LEFT_RESULT.detections.length).toBe(1);

    const faceCoordinates = extractFaceCoordinates(LOOKING_LEFT_RESULT);

    const [lookingLeft, lookingRight] = detectCheating(faceCoordinates);

    expect(lookingLeft).toBe(true);
    expect(lookingRight).toBe(false);
  });

  it("should return [false, true] when looking right", async () => {
    expect(LOOKING_RIGHT_RESULT.detections.length).toBe(1);

    const faceCoordinates = extractFaceCoordinates(LOOKING_RIGHT_RESULT);

    const [lookingLeft, lookingRight] = detectCheating(faceCoordinates);

    expect(lookingLeft).toBe(false);
    expect(lookingRight).toBe(true);
  });
});

export {};
