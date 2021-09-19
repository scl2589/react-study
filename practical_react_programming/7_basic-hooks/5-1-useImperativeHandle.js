import React, { forwardRef, useState, useImperativeHandle } from "react";

/**
 * useImperativeHandle 훅
 * 클래스형 컴포넌트의 부모 컴포넌트는 ref 객체를 통해 자식 컴포넌트의 메소드를 호출할 수 있다
 * 이 방식은 자식 컴포넌트의 내부 구현에 대해 의존성이 생기므로 지양하는게 맞지만, 종종 필요한 경우가 있다.
 * 그럴 때 useImperativeHandle훅을 사용하면, 마치 함수형 컴포넌트에도 멤버변수나 멤버 함수가 있는 것처럼 만들 수 있다.
 *
 */

// ref 속성 값을 받아 useImperativehandle의 첫번째 매개변수로 사용하고 있다.
// 그리고 두번째 매개 변수로 함수를 입력하고 있는데, 이 함수가 반환한 값이 이 부모의 ref 객체가 참조하는 값이다.
// 그리고 ref 속성값을 받기 위해 forwardRef 함수를 사용하였다.
function Profile(_, ref) {
  const [name, setName] = useState("mike");
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  );
}

export default forwardRef(Profile);
