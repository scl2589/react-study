function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");
  function addNewFruit() {
    fruits.push(newFruit); // 상태값을 push를 통해 직접 수정한 상태이다. 
    setNewFruit(""); // 이 코드에 의해 렌더링이 된다 (fruits.push(newFruit)코드에 의해 렌더링 되지 않는다.)

    // 상태값은 8번, 9번째 줄과 같이 변경하면 안되고, 아래와 같이 변경해야 한다.
    setFruits([...fruits, newFruit]); // fruits를 불변객체로 관리해야 새로운 과일이 추가될 때 재렌더링이 된다! 
    setNewFruit('');
  }
  
  return (
      <div>
          <Select options={fruits} selected={selectedFruit} onChange={onChange} /> 
          <input 
            type="text"
            value={newFruit}
            onChange={e => setNewFruit(e.target.value)}
          />
          <button onClick={addNewFruit}>추가하기</button>
      </div>
  )