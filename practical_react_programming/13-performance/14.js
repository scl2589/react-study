// 리액트는 같은 key를 갖는 요소끼리만 비교를 하기 때문에 key를 추가하면 효율적으로 렌더링을 할 수 있다.
// key 속성값은 리액트가 렌더링을 효율적으로 할 수 있도록 우리가 제공하는 추가 정보이다. 데이터의 id 값을 key 속성값으로 넣는 것이 좋다.
import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p key='apple'>사과</p>
        <p key='banana'>바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p key='apple'>사과</p>
        <p key='pineapple'>파인애플</p>
        <p key='banana'>바나나</p>
      </div>
    );
  }
}
