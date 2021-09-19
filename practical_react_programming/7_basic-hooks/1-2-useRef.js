import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [age, setAge] = useState(20);
  // 이전 age 값을 기억하기 위해 useRef 사용
  const prevAgeRef = useRef(20);

  // useEffect를 통해 값을 업데이트 하고 있다. (useEffect는 렌더링 후에 호출이 된다.)
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);

  // 그래서 컴포넌트 함수 안에서 렌더링을 할 때는 prevAgeRef객체는 이전 값을 가리키고 있다가, 그 이후에 갱신을 하는 것이다.
  // 이를 통해 이전 값을 기반으로 처리를 할 수 있는 것이다.
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}
