import React, { useRef } from "react";
import Profile from "./Profile";

export default function App() {
  const profileRef = useRef();
  const onClick = () => {
    // useRef 훅을 이용해서 ref 객체를 Profile 컴포넌트의 ref 속성값을 입력하고 있다.
    // 이렇게 되면 profileRef.current는 5-1 (line 8 - 10) 에서 반환한 addAge와 getNameLength를 참조하게 된다.
    // 그래서 자식에서 제공해준 이 두가지 함수를 사용할 수 있게 된다.
    if (!profileRef.current) {
      console.log("current name length: ", profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}
