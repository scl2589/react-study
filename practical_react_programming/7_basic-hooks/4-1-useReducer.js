import React, { useReducer } from "react";

export default function App() {
  // 여러 개의 상태값을 관리할 때는 useReducer를 사용하면 좋다.
  // 반환되는 값은? state를 통해 상태값이 반환되고, 상태값을 변경할 수 있는 Dispatch 함수가 반환된다.
  // 매개변수는? reducer라는 함수를 입력하고, 초기값을 입력한다. (reducer 함수는 아래에 구현되어있다)
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type='text'
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "setName", name: e.currentTarget.value })
        }
      />
      <input
        type='number'
        value={state.age}
        onChange={(e) =>
          // dispatch에는 type을 입력하도록 되어있다.
          dispatch({ type: "setAge", age: e.currentTarget.value })
        }
      />
    </div>
  );
}

const INITIAL_STATE = { name: "empty", age: 0 };
const MAX_AGE = 50;

function reducer(state, action) {
  // type으로 어떤 action인지 구분한다.
  // reducer를 이용하면 상태값을 변경하는 로직을 분리할 수 있기 때문에 이런 점이 장점이라 할 수 있다.
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      if (action.age > MAX_AGE) {
        return { ...state, age: MAX_AGE };
      } else {
        return { ...state, age: action.age };
      }
    default:
      return state;
  }
}
