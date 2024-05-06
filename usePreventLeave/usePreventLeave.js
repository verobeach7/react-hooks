export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    // 브라우저 호환을 위해 아래 코드 필요
    // https://developer.mozilla.org/ko/docs/Web/API/Window/beforeunload_event
    event.returnValue = "";
  };
  // "beforeunload"는 window가 닫히기 전에 function이 실행되는 것을 허락함
  const enalbePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enalbePrevent, disablePrevent };
};
