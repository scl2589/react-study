// 특정 목록의 이름을 수정하는 순간, 부모가 가진 데이터와 정합이 안맞는다.
// => 이는 버그로 이어질 코드 - 자식 컴포넌트에서 부모의 데이터를 별도의 상태값으로 관리하면 좋지 않다.
// 상태값은 일부 컴포넌트로 한정해서 관리하는 것이 좋다.

function TodoList({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((item) => item.done));
  function onChangeName(key, name) {
    setDoneList(
      // 상태값을 수정하는데 todo의 name을 수정하는 코드이다.
      doneList.map((item) => (item.key === key ? { ...item, name } : item))
    );
  }
}
