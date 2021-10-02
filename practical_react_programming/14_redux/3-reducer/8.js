function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SAY_HELLO:
        // 순수함수가 되려면 입력이 같을 때 같은 출력을 줘야 하는데, 여기서는 random으로 출력이 달라진다.
        // 그래서 random 함수를 사용하면 안된다.
        // 이 때는 액션에서 데이터를 미리 만들어서 (random 사용) 진행해야한다.
        const random = Math.floor(Math.random() * 10 + 1);
        draft.msg = `안녕하세요, ${action.name}님의 행운의 숫자는 ${random}입니다.`;
        break;
      case INREMENT:
        // 서버 API를 리듀서에서 호출하면 안된다
        callApi({ url: "sendActionLog", data: action });
        draft.value += 1;
        break;
    }
  });
}
