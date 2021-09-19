import React, { useMemo, useState } from "react";

// useMemo 훅은 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용된다.
// 여기서는 runExpensiveJob 함수가 계산량이 많다고 가정해본다!

export default function App() {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);

  // UseMemo 훅의 첫번째 매개변수는 함수를 입력하고,
  // 두번째 파라미터에 있는 배열(deps)의 값이 하나라도 변경이 되면 첫번째 파라미터에 있는 함수가 실행된다.

  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);

  return (
    <>
      <p>{`value is ${value}`}</p>
      <button
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1/v2 수정
      </button>
      <p>{`v3 is ${v3}`}</p>
      <button onClick={() => setV3(Math.random())}>v3 수정</button>
    </>
  );
}

function runExpensiveJob(v1, v2) {
  console.log("runExpensiveJob is called");
  //run something too expensive
  return v1 + v2;
}
