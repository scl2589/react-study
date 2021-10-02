// 아래와 같이 리듀서 함수를 많이 작성한다.
const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.todos.push(action.todo),
  [REMOVE_ALL]: (state) => (state.todos = []),
  [REMOVE]: (state, action) =>
    (state.todos = state.todos.filter((todo) => todo.id !== action.id)),
});
