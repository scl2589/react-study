// immer를 사용하게 되면 상태값을 수정하는 로직을 손쉽게 작성이 가능하다.
// 전체를 produce로 감싸주면, 불변객체로 관리해야한다는 압박없이 마음껏 코드 작성이 가능하다.
function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD:
        draft.todos.push(action.todo);
        break;
      case REMOVE_ALL:
        draft.todos = [];
        break;
      case REMOVE:
        draft.todos = draft.todos.filter((todo) => todo.id !== action.id);
      default:
        break;
    }
  });
}
