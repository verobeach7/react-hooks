import { useEffect, useRef } from "react";

export const useClick = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }
    // ref 안에 element.current가 있는지 확인 후 있으면 click 이벤트를 부여함
    // componentDidMount, componentDidUpdate 시 addEventListener를 부여함
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    // unmount되기 전에 EventListener를 없애줘야 함(리소스 정리)
    // 함수를 return하는 경우 componentWillUnmount시 호출됨
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return typeof onHover !== "function" ? undefined : element;
};
