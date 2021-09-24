// 삼항연산자 3번 사용
// 각 null이 어떤 조건에 의해 작성되었는지 한 번에 파악하기 힘듦
// 아래 코드는 크게 2 부분으로 나누어짐 (UI 요소!)

function Greeting({ isEvent, isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isEvent ? (
        <div>
          <p>오늘의 이벤트를 놓치지 마세요. </p>
          <button onClick={onClickEvent}>이벤트 참여하기</button>
        </div>
      ) : isLogin ? (
        cash <= 100000 ? (
          <div>
            <p>{name}님 안녕하세요.</p>
            <p>현재 보유하신 금액은 {cash}원입니다.</p>
          </div>
        ) : null
      ) : null}
    </div>
  );
}
