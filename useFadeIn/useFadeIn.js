import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      if (typeof duration !== "number" || typeof delay !== "number") {
        return;
      }
      const { current } = element;
      // React 16버전
      /* current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1; */
      // React 18버전부터는 아래와 같이 적용
      requestAnimationFrame(() => {
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      });
    }
  });
  return { ref: element, style: { opacity: 0 } };
};
