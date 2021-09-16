function Todo({title, desc}) {
    const [priority, setPriority] = useState('high');
    function onClick() {
        setPriority(priority === 'high'? 'low' : 'high')
    }
    return (
        <div>
            <Title title={title}/>
            <p>{desc}</p>
            <p>{priority === 'high' ? '우선순위 높음' : '우선순위 낮음'}</p>
            <button onCLick={onClick}>우선순위 변경</button>
        </div>
    )
}

const Title = React.memo(({ title }) => {
    return <p style={{color: 'blue'}}>{title}</p>
})

ReactDOM.render(
    <Todo title="리액트 공부하기" desc="실전 리액트 프로그래밍을 공부한다" />,
    document.getElementById('root')
)