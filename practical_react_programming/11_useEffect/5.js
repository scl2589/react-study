/**
 * 부수효과 함수를 async await 함수로 아래와 같이 만들면 문제가 된다
 * 부수효과 함수의 반환값은 항상 함수 타입이어야 하기 때문이다.
 * asnc await 함수는 Promise 객체를 반환하기 때문에 부수효과 함수가 될 수 없다.
 * 부수효과 함수는 함수만 반환할 수 있고, 반환된 함수는 부수효과 함수가 호출되기 직전과 컴포넌트가 사라지기 직전에 호출된다
 * 그래서 async await를 사용하고 싶다면 #2번과 같이 함수를 하나 만들어서 호출해주는 방식을 사용해야 한다.
 */

useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);

// #2
useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }
  fetchAndSetUser();
}, [userId]);
