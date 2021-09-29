// filter 연산을 하게 되면 또 다시 새로운 배열이 만들어지기 때문에 options 값이 렌더링 될 때마다 새로운 값이 된다.
// 이럴 때는 useMemo 훅을 사용하면 된다 (9.js 참고하기)
function SelectFruit({ selectedFruit, onChange }) {
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
    <div>
      <Select
        options={FRUITS.filter((item) => item.price <= maxPrice)}
        selected={selectedFruit}
        onChange={onChange}
      />
    </div>
  );
}

const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 },
];
