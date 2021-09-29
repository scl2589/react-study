/**
 * useMemo 훅을 이용하면 필요할 때만 fruits 값이 변경되도록 할 수 있다.
 * useMemo 안에서 사용하는 속성값이나 상태값을 의존성 배열안에 넣으면 된다.
 */

function SelectFruit({ selectedFruit, onChange }) {
  const fruits = useMemo(
    () => FRUITS.filter((item) => item.price <= maxPrice),
    [maxPrice]
  );

  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
    </div>
  );
}

const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 },
];
