// 사람들이 알림을 사용하기 위해 title과 options를 보냄
export const useNotification = (title, options) => {
  // 사용하고 있는 윈도우(인터넷브라우저)에 Notification 기능이 있는지 확인
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    // 알림권한 확인
    if (Notification.permission !== "granted") {
      // 알림 권한 요청
      Notification.requestPermission().then((permission) => {
        // 수락하였다면 알림 보내기
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          // 수락하지 않으면 아무것도 하지 않음
          return;
        }
      });
    } else {
      // 이미 권한이 허락되어 있다면 알림 보내기
      new Notification(title, options);
    }
  };
  return fireNotif;
};
