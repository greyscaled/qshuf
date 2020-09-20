import { useEffect } from "react";

export const useWindowEventListener = <T extends keyof WindowEventMap>(
  type: T,
  listener: (ev: WindowEventMap[T]) => void
): void => {
  useEffect(() => {
    window.addEventListener(type, listener);
    return () => {
      console.log("unmounting");
      window.removeEventListener(type, listener);
    };
  }, [type, listener]);
};
