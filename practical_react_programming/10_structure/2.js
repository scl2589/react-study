// 아래와 같은 코드는 재사용이 힘들다.
// 컴포넌트가 비즈니스 로직이나 상태값을 갖고 있으면 재사용을 하기가 힘들다.
// 비즈니스 로직과 상태값의 유무로 컴포넌트를 분리하는 것을 추천한다. (재사용성이 좋은 컴포넌트와 그렇지 않은 컴포넌트로 분리)
// 재사용성이 좋다? 1. 비즈니스 로직이없다. 2. 상탯값이 없다. 단, 마우스 오버(mouse over)와 같은 UI 효과를 위한 상태값은 제외한다.

import React, { useState } from "react";
import { getNextFriend } from "./data";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }

  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);
    setAgeLimit(value);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <div>
        <select onChange={onChangeOption} value={ageLimit}>
          {AGE_LIMIT_OPTIONS.map((option) => {
            <option key={option} value={option}>
              {option}
            </option>;
          })}
        </select>
        세 이하만 보기
      </div>
      <ul>
        {friendsWithAgeLimit.map((friend) => (
          <li key={friend.id}>{`${friend.name} (${firend.age})`}</li>
        ))}
      </ul>
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
