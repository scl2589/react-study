function LikeButton() {
    //useState 함수는 component에 state 상태값을 추가할 때 사용한다.
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소': '좋아요';

    return <button onClick={()=> setLiked(!liked)}>{text}</button>

    // 리액트에서 UI를 표현하는 가장 작은 단위는 리액트 요소이다.
    return React.createElement(
        'button', // 이렇게 문자열로 입력하면 html에 해당하는 태그가 만들어진다.
        { onClick: () => setLiked(!liked)}, // 속성값을 말한다.
        text, // children을 입력한다.
    )
}

function Container() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <LikeButton />
            <div>
                <span>현재 카운트: </span> 
                <span style={{ marginRight: 10, color: 'red' }}>{count}</span> 
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
            </div>
        </div>
    )
}
const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer)