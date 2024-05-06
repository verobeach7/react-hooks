import defaultAxios from "axios";
import { useEffect, useState } from "react";

// axios instance를 보내지 않으면 패키지에서 axios를 얻어 defaultAxios로 설정
export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  // useEffect의 deps에 trigger를 넣어주고 re-fetch하고 싶을 때 trigger의 값을 변경시키면 됨
  const [trigger, setTrigger] = useState(0);

  // re-fetch를 위해 state 변경하기
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    // trigger는 고유의 값을 가지게 됨
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);
  // return state;
  // re-fetch하기 위해서는 값을 변경시킬 수 있게 해야함
  return { ...state, refetch };
};

export default useAxios;
