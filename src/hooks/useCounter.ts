import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 2000, startCounting: boolean = false) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!startCounting || started.current) return;
    started.current = true;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [startCounting, target, duration]);

  return value;
}
