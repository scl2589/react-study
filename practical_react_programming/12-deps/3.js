/**
 * 상태값 변경 함수를 입력한다.
 * 상태값 변경 함수에 함수를 입력할 때는 이 함수의 매개변수로 이전 상태값이 들어온다.
 * 따라서 의존성 배열에서 count 상태값을 제거하고, 빈 배열로 작성할 수 있다.
 */

function MyComponent() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    function onClick() {
      setcount((prev) => prev + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);
}
