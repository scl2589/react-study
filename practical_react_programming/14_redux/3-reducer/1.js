// 리듀서는 액션이 발생했을 때 새로운 상태값을 만드는 함수
// 리덕스의 상태값을 수정하는 유일한 방법은 액션 객체와 함께 dispatch 메서드를 호출하는 것
// 상태값은 dispatch 메서드가 호출되는 순서대로 리덕스 내부에서 변경되기 때문에 상태값이 변화되는 과정을 쉽게 이해할 수 있다.
// 상태값은 불변객체로 관리해야 한다.
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REMOVE_ALL:
      return {
        ...state, // 불변객체로 관리하기 위해 전개 연산자를 사용했다.
        todos: [],
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

const INITIAL_STATE = { todos: [] };
