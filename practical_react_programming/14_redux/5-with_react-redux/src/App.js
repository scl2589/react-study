import React from "react";

import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";
import { Provider } from "react-redux";
import store from "./common/store";

export default function App() {
  return (
    // Provider 컴포넌트에서는 리액트에서 액션이 처리됐을 때 이벤트를 받아서 하위에 있는 다른 컴포넌트가 다시 렌더링될 수 있도록 도와준다.
    <Provider store={store}>
      <div>
        <FriendMain />
        <TimelineMain />
      </div>
    </Provider>
  );
}
