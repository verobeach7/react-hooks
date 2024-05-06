import { useEffect, useState } from "react";

export const useNetwork = (onChange) => {
  // navigator.onLine은 네트워크가 온라인인지 아닌지를 true, false로 반환해줌
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
    // dependency를 주지 않음으로써 여러 개의 이벤트리스너가 생긱는 것을 막음
  }, []);
  return status;
};
