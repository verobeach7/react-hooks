import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
  // Hook은 최상위에서만 호출되어야 함!!!
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // allTabs를 넘겨받지 않아도 에러로 인해 프로그램이 종료되는 것이 아니라 아무것도 하지 않게 처리됨
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
