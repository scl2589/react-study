const FRIENDS = [
  { name: "쯔위", age: 15 },
  { name: "수지", age: 20 },
  { name: "손나은", age: 25 },
  { name: "아이유", age: 30 },
];

let nextId = 0;
export function getNextFriend() {
  return { ...FRIENDS[nextId % 4], id: nextId++ };
}
