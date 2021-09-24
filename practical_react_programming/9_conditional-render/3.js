function Greeting({ isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isLogin ? (
        <div>
          <p>{name}님 안녕하세요</p>
          <p>현재 보유하신 금액은 {cash}원입니다. </p>
        </div>
      ) : null}
      {/* && 앰퍼샌드 기호를 사용한 아래 방식 추천  */}
      {isLogin && isLogin2 && (
        <div>
          <p>{name}님 안녕하세요</p>
          <p>현재 보유하신 금액은 {cash}원입니다. </p>
        </div>
      )}
    </div>
  );
}
