import React, { useState, useRef, useEffect } from "react";

export default function App() {
  // 여기서는 timerIdRef를 관리하기 위해 useState보다는 ref 객체가 더 적합하다!
  // useState는 timerId가 변경됐을 때 다시 렌더링된다. 하지만 UI 데이터가 아니기 때문에 렌더링 결과는 똑같고, 불필요하게 렌더링이 일어난다.
  // ref는 렌더링과 상관 없는 값을 저장할 때 사용하면 유용하다.
  const timerIdRef = useRef(-1); // 초기값 -1
  useEffect(() => {
    timerIdRef.current = setTimeout(() => {}, 1000); //setTimout이 반환하는 값을 timerIdRef에 저장
  });

  useEffect(() => {
    if (timerIdRef.current >= 0) {
      clearTimeout(timerIdRef.current);
    }
  });
}
