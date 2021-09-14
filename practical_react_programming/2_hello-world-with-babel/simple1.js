function LikeButton() {
  //useState 함수는 component에 state 상태값을 추가할 때 사용한다.
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text); // 리액트에서 UI를 표현하는 가장 작은 단위는 리액트 요소이다.

  return React.createElement('button', // 이렇게 문자열로 입력하면 html에 해당하는 태그가 만들어진다.
  {
    onClick: () => setLiked(!liked)
  }, // 속성값을 말한다.
  text // children을 입력한다.
  );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: 'red'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);