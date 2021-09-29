function SelectFruit({ selectedFruit, onChange }) {
  return (
    <div>
      <Select
        // 컴포넌트 내부에서 이렇게 정의해서 자식 컴포넌트의 속성값으로 입력하면
        // 객체의 내용이 변경되지 않아도 자식 컴포넌트 입장에서는 속성값이 변경되었다고 인식한다.
        // 이렇게 과일 목록이 같은 값을 갖고 있다면 7.js 처럼 상수로 관리하는 것이 좋다.
        options={[
          { name: "apple", price: 500 },
          { name: "banana", price: 1000 },
          { name: "orange", price: 1500 },
        ]}
        selected={selectedFruit}
        onChange={onChange}
      />
    </div>
  );
}
