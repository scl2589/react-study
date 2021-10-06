import React, { useEffect, useReducer } from "react";
import store from "./../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList.js";
import { useSelector, shallowEqual } from "react-redux";

export default function FriendMain() {
  // useSelector 훅은 리덕스에서 액션이 처리가 되면 여기서 반환하는 값의 이전값을 기억했다가 이 값이 변경되었을 때, 해당 컴포넌트를 다시 렌더링해준다.
  // 만약 여러개의 상태값을 가져오고 싶을 때는 어떻게 해야할까?
  // 1. 여러개의 useSelector 을 여러개를 사용할 수 있다.
  const friends = useSelector((state) => state.friend.friends);
  const friends2 = useSelector((state) => state.friend.friends2);
  const friends3 = useSelector((state) => state.friend.friends3);
  // 2. 배열 혹은 객체를 반환하는 방법이 있다.
  // 그러나 이 방식의 문제는, 배열이 매번 새로 생성되기 때문에 안에 있는 두 값이 변경되지 않아도 리덕스에서 액션이 처리될 떄마다 불필요하게 컴포넌트가 렌더링 될 수 있다는 단점이다.
  // 이 때 두번째 매개변수를 통해 렌더링 할지 말지 결정할 수 있다. (보통 react-redux에서 제공하는 shallowEqual을 사용하면 된다.)
  const [friends, friends2] = useSelector(
    (state) => [state.friend.friends, state.friend.friends2],
    //shallowEqual은 state.friend.friends와 state.friend.friends2 각각 비교를 하기 때문에 이 두값이 변경되었을 때만 이 컴포넌트가 렌더링된다.
    // 그러나 매번 이렇게 shallowEqual을 입력하는 것은 번거롭기 때문에 custom-hook을 사용하는 방법을 추천한다.
    shallowEqual
  );

  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    // store.dispatch(addFriend(friend));
    dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
