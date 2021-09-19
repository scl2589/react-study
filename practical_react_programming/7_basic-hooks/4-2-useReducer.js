import React, { useReducer } from "react";

/**
 * 리액트로 코딩을 할 때 상위 컴포넌트에서 다수의 상태값을 관리한다.
 * 이때 자식 컴포넌트로부터 발생한 이벤트에서 상위 컴포넌트의 상태값을 변경해야 하는 경우가 많다.
 * 이를 위해 트리의 깊은 곳까지 이벤트 처리 함수를 전달하기도 한다. -> 해당 작업은 손도 많이가고, 코드의 가독성도 떨어진다.
 * useReducer와 contextAPI를 같이 사용하면 상위 컴포넌트에서 트리 깊은 곳으로 이벤트 처리 학습을 쉽게 전달할 수 있다.
 */

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      {/* 
       * ContextAPI를 이용해 ProfileDispatch라는 Context를 만들었고 
        상위 컴포넌트에서 Provider 컴포넌트를 이용해 useReducer의 dispatch함수를 내려준다
        그럼 필요한 곳에서 이 dispatch 함수를 이용해 상태값을 변경할 수 있다. 
        useReducer로 상태값을 관리하고, Context api로 상태값이나 dispatch 함수를 내려줌으로써 상태값 관리가 가능하다.
      */}
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
}

const INITIAL_STATE = { name: "empty", age: 0 };
const MAX_AGE = 50;

function reducer(state, action) {
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
