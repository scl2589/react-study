/**
 * 앞서 4.js 파일의 비효율적인 부분을 효율적으로 바꿨을 때 다음과 같은 코드로 작성할 수 있다.
 * 아래와 같이 여러 상태값을 참조하면서 값을 변경할 때는 useReducer 훅을 사용하는 것이 좋다.
 * dispatch 함수는 변하지 않는 값이므로, 의존성 배열에서 제거할 수 있다.
 * 값을 변경하는 로직은 reducer에서 작성한다. 시/분/초 를 객체로 만들어 하나의 useState로 만들어 의존성 배열을 제거할 수 있지만,
 * 다만, useReducer를 사용하면 다양한 액션과 상태값을 관리하기 용이하고, 상태값 변경 로직을 여러 곳에서 재사용할 수 있다.
 */
function Timer({ initialTotalSeconds }) {
  const [state, dispatch] = useReducer(reducer, {
    hour: Math.floor(initialTotalSeconds / 3600),
    minute: Math.floor((initialTotalSeconds % 3600) / 60),
    second: initialTotalSeconds % 60,
  });
  const { hour, minute, second } = state;
  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id);
  }, []);
}
function reducer(state) {
  const { hour, state, second } = state;
  if (second) {
    return { ...state, second: second - 1 };
  } else if (minute) {
    return { ...state, minute: minute - 1, second: 59 };
  } else if (hour) {
    return { hour: hour - 1, minute: 59, second: 59 };
  } else {
    return state;
  }
}
