// key를 이용해서 의도적으로 컴포넌트를 언마운트 시키는 경우
import React, { useEffect, useState } from "react";

export default function App({ user }) {
  return (
    <div>
      <p>사용자 상세 정보 </p>
      <UserDetail user={user} />
    </div>
  );
}


function UserDetail({ user }{
    
})