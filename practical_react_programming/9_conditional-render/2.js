// 여기서는 속성값이 추가됨

// if 문이 더 좋다.
// 삼항연산자가 많이 중첩되면 JSX 코드가 복잡해지기 때문에 주의해야한다.
function GreetingA({ isLogin, name }) {
  if (isLogin) {
    return (
      <p className='greeting' onClick={showMenu}>
        {`${name}님 안녕하세요.`}
      </p>
    );
  } else {
    return (
      <p className='noAuth' onClick={goToLoginPage}>
        권한이 없습니다.
      </p>
    );
  }
}

function GreetingB({ isLogin, name }) {
  return (
    <p
      className={isLogin ? "greeting" : "noAuth"}
      onClick={isLogin ? showMenu : goToLoginPage}
    >
      {isLogin ? `${name}님 안녕하세요.` : "권한이 없습니다."}
    </p>
  );
}
