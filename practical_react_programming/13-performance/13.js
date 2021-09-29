// 파인애플만 삭제와 추가를 반복하고 있다.
// 만약 파인애플을 사과와 바나나 사이에 넣는다면, 바나나 역시 영향을 받을 것이다.
// 리액트는 중간에 요소를 추가하면, 그 뒤에 있는 요소가 변경되지 않았다는 것을 알지 못한다.
// 바나나가 변경되지 않았다는 것을 알기 위해서는 모든 값을 비교해야 하는데, 연산량이 꽤 많게 되고, 수많은 연산이 일어난다.
// 리액트는 효율적으로 연산하기 위해 순서 정보를 이용한다.
// 처음에 위 상태에서 아래 상태로 변화될 때 , 첫번째 요소는 변화가 없고, 두번째 요소는 변화가 되었다는 것을 확인한다.
// 14.js와 같이 key속성값을 추가하면, 파인애플만 실제 DOM 요소에 추가할 수 있다.
import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p>사과</p>
        <p>바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>사과</p>
        <p>바나나</p>
        <p>파인애플</p>
      </div>
    );
  }
}
