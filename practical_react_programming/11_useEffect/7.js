/**
 * fetchAndSetUser함수가 Profile 컴포넌트가 렌더링 될 때마다 생성이 되지 않도록, useCallback 훅을 사용한다.
 * useCallback훅을 이용해서 userId가 변경될 때만 함수가 새로 생성되도록 한다.
 */

function Profile({ useId }) {
  const [user, setUser] = useState();
  const fetchAndSetUser = useCallback(
    async function fetchAndSetUser(needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);

  if (!user) {
    return <h1>로딩...</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`캐시: ${user.cash}`}</p>
      <p>{`계정 생성일: ${user.createdAt}`}</p>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
      <UserDetail user={user} />
    </div>
  );
}
