export const useConfirm = (message = "", onConfirm, onCancel) => {
  // onConfirm이 없거나 함수가 아니면 아무것도 하지 않음
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  // onCancel은 반드시 있어야 하는 것은 아님
  // onCancel이 있는데 함수가 아니면 아무것도 하지 않음
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    // 확인창에서 true이면 callback을 실행, false이면 아무것도 하지 않음
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
