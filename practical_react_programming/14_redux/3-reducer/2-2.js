// 이렇게 깊은 곳에 있는 객체를 수정하려고 한다면 (jane의 age)
// 해당 객체의 reference가 수정되어야 하고, 거슬러 올라가면서 부모 객체의 reference도 수정되어야 한다.
const state = {
  user: {
    name: "mike",
    friends: [
      {
        name: "jane",
        age: 23,
      },
      {
        name: "jake",
        age: 24,
      },
    ],
  },
  products: [],
};

// 불변객체로 관리하면 좋은 점
// 이전 객체 상태랑 현재 상태랑 변경됐는지 확인할 수 있다는게 장점이다.

prevState.user === nextState.user;
prevState.user.friends[0] = nextState.user.friends[1]; // false
prevState.products = nextSTate.products;
