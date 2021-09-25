// 재사용성이 좋은 코드
import React from "react";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>{`${friend.name} (${firend.age})`}</li>
      ))}
    </ul>
  );
}
