function SelectFruit({ selectedFruit, onChange }) {
  return (
    <div>
      <Select options={FRUITS} selected={selectedFruit} onChange={onChange} />
    </div>
  );
}

// 상수 변수로 관리해서 입력하면 위에서 Select 컴포넌트의 options 값은 변하지 않는 값이 된다.
const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 },
];
