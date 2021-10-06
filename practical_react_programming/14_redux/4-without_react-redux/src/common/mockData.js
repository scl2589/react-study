const friends = [
  { name: "린", age: 25 },
  { name: "윤", age: 20 },
  { name: "민", age: 30 },
  { name: "은", age: 21 },
];

const timelines = [
  { desc: "점심이 맛있었다", likes: 5 },
  { desc: "오늘 너무 재밌었다.", likes: 20 },
  { desc: "호텔에 놀러왔다. ", likes: 25 },
  { desc: "비싼 과일을 먹었다.", likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNExtData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
