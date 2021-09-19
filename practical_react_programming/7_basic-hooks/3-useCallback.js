// 개선 이전 코드
import React, { useState } from "react";

// useCallback 훅은 메모이제이션 기능을 이용한다.
// 함수 메모이제이션에 특화된 훅이다.
export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit
        // 컴포넌트가 렌더링 될 때마다 saveToServer 함수를 다시 만들어야 한다. 그래서 불필요한 렌더링이 발생한다.
        // 그래서 이럴 때 useCallback을 사용하면 된다 :)
        onSave={() => saveToServer(name, age)}
        setName={setName}
        setAge={setAge}
      />
      <p>{`v1: ${v1}`}</p>
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
}

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log("UserEdit render");
  return null;
});

function saveToServer(name, age) {}

//개선 이후 코드
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);
  // useCallback을 사용하여 name과 age가 변경될 때만 함수를 새로 생성되도록 한다. 
  const onSave = useCallback(() => saveToServer(name, age), [name, age])

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit
        onSave={() => saveToServer(name, age)}
        setName={setName}
        setAge={setAge}
      />
      <p>{`v1: ${v1}`}</p>
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
}

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log("UserEdit render");
  return null;
});

function saveToServer(name, age) {}
