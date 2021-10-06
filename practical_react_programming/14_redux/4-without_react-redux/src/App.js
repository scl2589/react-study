import React from "react";

import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";

export default function App() {
  return (
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  );
}
