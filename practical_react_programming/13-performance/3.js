/**
 * Parent 컴포넌트가 상태값 변경을 위해 렌더링할 때, 자식 컴포넌트도 렌더링을 한다.
 * 자식 컴포넌트(SelectFruit)에서 리액트 memo 함수를 사용했다고 했을 때,
 * 만약 selected 속성값이 변경되지 않으면 이 잣기 컴포넌트는 렌더링 되지 않을 것이라고 생각하기 쉽지만,
 * 17번쨰 줄과 같이 코드를 작성하면 매번 렌더링 할 때마다 새로운 값이 입력되기 때문에 리액트 memo를 사용했다고 하더라도 이 컴포넌트는 렌더링이 된다.
 */

function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit
        selected={selectedFruit}
        onChange={(fruit) => setSelectedFruit(fruit)}
      />
    </div>
  );
}
