// if 문을 사용해서 isLogin 조건이 만족되는지에 따라 렌더링이 다르다.
function GreetingA({ isLogin, name }) {
  if (isLogin) {
    return <p>{`${name}님 안녕하세요.`}</p>;
  } else {
    return <p>권한이 없습니다.</p>;
  }
}

// 삼항 연산자 사용
function GreetingB({ isLogin, name }) {
  return <p>{isLogin ? `${name}님 안녕하세요.` : "권한이 없습니다."}</p>;
}
