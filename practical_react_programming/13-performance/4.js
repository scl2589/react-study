function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      {/* onChange에 상태값 변경 함수를 그대로 입력해주면, 한 번 생성되고 변경되지 않으므로 컴포넌트가 렌더링이 되지 않도록 할 수 있다.   */}
      <SelectFruit selected={selectedFruit} onChange={setSelectedFruit} />
    </div>
  );
}
