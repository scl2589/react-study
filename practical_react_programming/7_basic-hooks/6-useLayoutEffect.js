import React, { useState, useEffect } from "react";

/**
 * useLayoutEffect 훅은 부수효과 함수를 동기적으로 호출한다.
 * 부수효과 함수가 렌더링 결과가 돔에 반영된 직후에 바로 호출된다
 * 그렇기 때문에 useLayoutEffect 훅에 부수효과 함수에서 연산을 많이 하면 브라우저가 먹통이 될 수 있다.
 *
 * 특별한 이유가 없다면 useEffect 훅을 사용하는 것이 성능상 이점이 있다.
 * 그럼 언제 useLayoutEffect를 사용하는가?
 * - 렌더링 직후에 돔 요소의 값을 읽어드리는 경우
 * - 조건에 따라서 컴포넌트를 다시 렌더링 하고 싶은 경우
 *
 * useLayoutEffect가 호출되는 시점은?
 * 리액트가 렌더링하고, 실제 DOM에 반영을 했지만, 브라우저가 화면을 그리기 전에 useLayoutEffect가 실행된다.
 */
export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }

    let v = 0;
    for (let i = 0; i < 1000000000; i++) {
      v * 2 + i;
    }
    console.log(v);
  }, [width]);
  return (
    <div>
      <div style={{ width, height: 100, backgroundColor: "green" }}>test</div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}
