function Title({ title, color }) {
    return <p style={{ color }}>{title}</p>;
}

// 컴포넌트를 이용해 리액트 요소를 만드는 경우에는 
// type을 보면 컴포넌트 함수가 입력이 되어 있다
// 이 함수를 이용해서 리액트는 렌더링을 위한 충분한 정보를 얻을 수 있다 
// 리액트가 이 함수 (Title)를 실행하면, `<p style={{ color }}>{title}</p>;` 값을 얻을 수 있다.
const element = <Title title="안녕하세요" color="blue" />

console.log(element)

const consoleLogResult = {
    type: Title,
    props: { title: '안녕하세요', color: 'blue'}
}