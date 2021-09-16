const element = <a href="http://google.com">click here</a>
elements.type = 'b'; // 에러발생  - 리액트 요소는 불변 객체이기 때문이다.