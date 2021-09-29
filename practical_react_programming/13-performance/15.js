// 배열 중간에 새로운 원소를 넣는 경우에는 순서 정보가 아닌, id 값을 추가해주는 것이 좋다 :)
// 예를 들어 과일의 이름을 key로 해도 된다!

import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  const fruits = flag ? FRUITS_1 : FRUITS_2;
  return (
    <div>
      {fruits.map((item, index) => {
        <p key={index}>{item}</p>;
      })}
    </div>
  );
}

const FRUITS_1 = ["사과", "바나나"];
const FRUITS_2 = ["사과", "파인애플", "바나나"];
