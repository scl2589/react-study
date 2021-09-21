/**
 * 가장 상단에는 속성값의 타입을 정리한다 -> 함수의 propTypes라는 속성으로 객체를 입력할 수 있다.
 * propTypes 속성값 타입 정보를 가장 위에 작성하는 이유는 컴포넌트를 사용하는 사람의 입장에서 올바른 값을 입력할 수 있도록 고려해야 하기 때문이다.
 * 속성값 타입 정보를 파일의 상단에 작성
 * 타입스크립트를 사용한다면, propTypes를 입력할 필요가 없다.
 */
MyComponent.propTypes = {};

// 명명된 매개변수 문법으로 작성하는 것이 좋다.
export default function MyComponent({ prop1, prop2 }) {}

// 컴포넌트 바깥에 있는 변수는 맨 밑에 작성하는 것이 좋고, 변수명은 대문자로 작성하는 것이 좋다.
const COLUMNNS = [
  { id: 1, name: "phoneNumber", width: 200, color: "white" },
  { id: 1, name: "city", width: 100, color: "grey" },
];

const URL_PRODUCT_LIST = "/api/products";
function getTotalPrice({ price, total }) {}
