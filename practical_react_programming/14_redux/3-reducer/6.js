// 리듀서 코드를 작성할 때 주의할 점
// 아래 코드에서 문제가 될 수 있는 것은 selectedPeople에서 참조하고 있는 객체의 이름을 여기서 수정했을 때, 새로운 객체가 만들어졌지만
// selectedPeople은 예전의 객체 레퍼런스를 들고 있기 때문에 name은 변경되지 않은채로 예전값을 참조하게 된다.
// 이렇게 객체를 관리할 때는 객체의 레퍼런스가 아니라 고유한 아이디 값을 이용해야 한다.
function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_PEOPLE:
        // draft.selectedPeople = draft.peopleList.find(
        //   (item) => item.id === action.id
        // );
        draft.selectedPeople = action.id; // 이렇게 변경해서 활용하는게 좋다
        break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find((item) => item.id === action.id);
        people.name = action.name;
        break;
    }
  });
}
