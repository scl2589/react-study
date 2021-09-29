const prevProps = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with john", priority: "low" },
  ],
  friends: [],
};

const nextProps = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with john", priority: "high" },
  ],
  friends: [],
};

prevProps.todos === nextProps.todos;

// 데이터를 불변 객체로 관리하면/불변 데이터로 관리하면 이전/이후 값의 단순 비교만으로 컴포넌트의 속성값이 변경됐는지 알 수 있다.
// 이를 통해 렌더링 성능에 큰 도움이 된다.

const prevTodos = [1, 2, 3];
const nextTodos = [...todos, 4];
// 위와 같이 불변객체로 관리한다는 것은, `todos.push(4)`와 달리 새로운 객체를 만드는 것이다

prevTodos === nextTodos;

// 속성값이 여러개라면??
const isEqual =
  prevProps.todos === nextProps.todos &&
  prevProps.friends === nextProps.friends;
