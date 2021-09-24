// 6.js의 3개의 삼항연산자 대신 && 사용
function Greeting({ isEvent, isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isEvent && (
        <div>
          <p>오늘의 이벤트를 놓치지 마세요. </p>
          <button onClick={onClickEvent}>이벤트 참여하기</button>
        </div>
      )}
      {!isEvent && isLogin && cash <= 100000 && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
    </div>
  );
}
