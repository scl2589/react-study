/**
 * immer 패키지 사용
 * produce를 가져와서 호출을 하면, person이라는 값을 변경할 수 있따.
 */
import produce from "immer";

const person = { name: "mike", age: 22 };
const newPerson = produce(person, (draft) => {
  draft.age = 32;
});
