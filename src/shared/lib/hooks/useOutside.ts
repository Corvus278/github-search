import { useEffect, useRef, useState } from "react";

export const useOutside = (): {
  ref: React.Ref<any>;
  clickIsOutside: boolean;
  setClickIsOutside: (state: boolean) => void;
} => {
  const ref = useRef<any>();
  const [clickIsOutside, setClickIsOutside] = useState(false);

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (!ref?.current.contains(ev.target)) {
        setClickIsOutside(true);
      }
    };
    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  });

  return {
    ref,
    clickIsOutside,
    setClickIsOutside,
  };
};
