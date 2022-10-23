export const b64toBlob = async (base64: string) =>
  fetch(base64).then((res) => res.blob());
