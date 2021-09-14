function LikeButton() {
    //useState 함수는 component에 state 상태값을 추가할 때 사용한다.
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소': '좋아요';

    // 리액트에서 UI를 표현하는 가장 작은 단위는 리액트 요소이다.
    return React.createElement(
        'button', // 이렇게 문자열로 입력하면 html에 해당하는 태그가 만들어진다.
        { onClick: () => setLiked(!liked)}, // 속성값을 말한다.
        text, // children을 입력한다.
    )
}


const domContainer1 = document.getElementById('root1');
ReactDOM.render(React.createElement(LikeButton), domContainer1); // domContainer에 Likebutton 을 렌더링 할 것이다! :) 
const domContainer2 = document.getElementById('root2');
ReactDOM.render(React.createElement(LikeButton), domContainer2); // domContainer에 Likebutton 을 렌더링 할 것이다! :) 
const domContainer3 = document.getElementById('root3');
ReactDOM.render(React.createElement(LikeButton), domContainer3); // domContainer에 Likebutton 을 렌더링 할 것이다! :) 

// 보통은 아래와 같이 3개로 작성한다고 하면, 아래와 같이 리액트 안에서 만드는게 좋다. 
const domContainer = document.getElementById('root');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ),
    domContainer
)


/*
<div>
    <hello>
    <world>
</div>


React.createElement(
    'div',
    null,
    React.createElement('p', null, 'hello'),
    React.createElement('p', null, 'world)
)
*/