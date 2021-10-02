// 수정해야 하는 값이 깊은 곳에 있다면 전개 연산자를 사용하기에는 한계가 있다.
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: getNewId(), title: action.title, priority: action.priority },
        ],
      };
  }
}
