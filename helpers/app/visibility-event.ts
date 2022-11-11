import { useState, useEffect } from "react";

export function getBrowserVisibilityProp() {
  if (typeof document.hidden !== "undefined") {
    // Opera 12.10 and Firefox 18 and later support
    return "visibilitychange";
  } else if (typeof document["msHidden"] !== "undefined") {
    return "msvisibilitychange";
  } else if (typeof document["webkitHidden"] !== "undefined") {
    return "webkitvisibilitychange";
  }
}

export function getBrowserDocumentHiddenProp() {
  if (typeof document.hidden !== "undefined") {
    return "hidden";
  } else if (typeof document["msHidden"] !== "undefined") {
    return "msHidden";
  } else if (typeof document["webkitHidden"] !== "undefined") {
    return "webkitHidden";
  }
}

export function getIsDocumentHidden() {
  return !document[getBrowserDocumentHiddenProp()];
}

export function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(getIsDocumentHidden());
  const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());

  useEffect(() => {
    const visibilityChange = getBrowserVisibilityProp();

    document.addEventListener(visibilityChange, onVisibilityChange, false);

    return () => {
      document.removeEventListener(visibilityChange, onVisibilityChange);
    };
  });

  return isVisible;
}

export const getVisibilityEventNames = (): [string, string] => {
  let hidden: string = null;
  let visibilityChange: string = null;

  if (document.hidden) {
    // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";

    console.log("1");
  } else if (document["msHidden"]) {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";

    console.log("2");
  } else if (document["webkitHidden"]) {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";

    console.log("3");
  }

  return [hidden, visibilityChange];
};
