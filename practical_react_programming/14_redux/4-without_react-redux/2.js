// 커스텀 훅을 만들어 shallowEqual을 항상 입력해준다. 그리고 선택자 함수만 입력하면 되게끔한다.
import { useSelector, shallowEqual } from "react-redux";

function useMySelector(selector) {
  return useSelector(selector, shallowEqual);
}

function MyComponent() {
  const [value1, value2] = useMySelector((state) => [
    state.value1,
    state.value2,
  ]);
  // 주의!!
  // 배열을 사용하지 않으면 value3이라는 값의 레퍼런스만 비교하면 될텐데 shallowEqual은 value3이 갖고 있는 모든 속성값을 비교한다. -> 비효율적인 측면 존재
  const value3 = useMySelector((state) => state.value3);

  // 그래서 아래와 같이 배열로 반환하는것이 좋다!! :)
  const [value4] = useMySelector((state) => [state.value4]);
}
