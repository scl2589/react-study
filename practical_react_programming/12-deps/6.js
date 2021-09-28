/**
 * 속성값으로 전달되는 이런함수는 자주 변경된다
 * 함수 내용은 그대로인데 렌더링될 때 마다 변경되는 경우가 있다.
 * 이로 인해 부수효과 함수가 불필요하게 자주 호출될 수 있다.
 *
 */

function MyComponent({ onClick }) {
  useEffect(() => {
    window.addEventListener("click", () => {
      onclick();
    });
  }, [onClick]);
}
