// 재사용성이 좋은 코드
import React, { useState } from "react";
import { getNextFriend } from "./data";
import FriendList from "../component/FriendList";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
  const [nameLenLimit, setNameLenLimit] = useState(MAX_AGE_LIMIT);

  const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
  const friendsWithNameLenLimit = friends.filter(
    (item) => item.age <= nameLenLimit
  );
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label='세 이하만 보기'
        onChange={setAgeLimit}
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        value={nameLenLimit}
        options={NAME_LEN_LIMIT_OTPIONS}
        label='자 이하만 보기'
        onChange={setNameLenLimit}
      />
      <FriendList friends={friendsWithNameLenLimit} />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const MAX_NAME_LEN_LIMIT = 100;
const NAME = (LEN_LIMIT_OPTIONS = { friendsWithAgeLimit });
