import { RefObject, useEffect } from "react";

const useMutationObserver = (
  ref: RefObject<any>,
  callback: (mutations: MutationRecord[], observer: MutationObserver) => void,
  options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  }
) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);
      return () => observer.disconnect();
    }
  }, [callback, options, ref]);
};

export {
    useMutationObserver
}