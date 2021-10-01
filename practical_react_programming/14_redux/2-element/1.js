// 액션 객체
// 액션을 구분하기 위해서 type 속성값을 사용하고, 이 값은 unique해야 한다.
// 데이터는 리듀서에서 받아서 처리한다.

store.dispatch({ type: "todo/ADD", title: "영화 보기", priority: "high" });
store.dispatch({ type: "todo/REMOVE", id: 123 });
store.dispatch({ type: "todo/REMOVE_ALL " });
