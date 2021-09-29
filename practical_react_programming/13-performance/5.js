function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);

  // useCallback을 이용해서 작성성하면, 필요할때만 함수가 변경이 될 수 있다.
  // 이 함수는 한 번 생성된 값으로 고정이 된다.
  const onChangeFruit = useCallback((fruit) => {
    setSelectedFruit(fruit);
    sendLog({ type: "fruit change", value: fruit });
  }, []);

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit selected={selectedFruit} onChange={onChangeFruit} />
    </div>
  );
}
