// ref객체는 컴포넌트 안에서 수정하면 안된다. 단 concurrent가 동작하지 않는 리액트 버전에서는 문제가 되지 않는다.

function MyComponent({ onClick }) {
  const onClickRef = useRef();
  onClickRef.current = onClick;
}
