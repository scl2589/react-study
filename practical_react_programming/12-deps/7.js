/**
 * useRef 훅이 해결책이 되는 경우
 * 렌더링이 될때마다 ref 객체에 onclick 함수를 넣어주고, 원래 사용하려던 곳에서 ref 객체를 이용해 함수를 호출하는 방식
 * 이렇게 부수효과 함수에서 사용된 ref객체는 의존성 배열에 추가할 필요없다.
 * 그러나 아래 방식은 불필요한 코드와 연산이 추가되었다.
 */

function MyComponent({ onClick }) {
  const onClickRef = useRef();
  useEffect(() => {
    onClickRef.current = onClick;
  });
  useEffect(() => {
    window.addEventListener("click", () => {
      onClickRef.current();
    });
  });
}
