// 리듀서에서 뭔가 잘못 처리가 됐을 때, 예외가 발생했을 때 이를 캐치해서 서버로 전송 가능하다.
const reportCrash = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    // 서버로 예외 정보 전송
  }
};
