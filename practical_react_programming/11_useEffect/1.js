function Profile({ userId }) {
  const [user, setUser] = useState();
  // useEffect의 부수효과 함수는 Profile 컴포넌트가 렌더링 될 때마다 노출되기 때문에 서버의 api를 호출하는 코드가 항상 실행이 된다.
  // 코드가 항상 실행되면, 부담스러울 수 있기 때문에 deps 에 빈 배열을 넣어 마운트 된 후에 한 번만 호출될 수 있도록 한다.

  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, []);
}
