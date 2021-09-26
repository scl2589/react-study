function Profile({ userId }) {
  const [user, setUser] = useState();
  // userId를 입력하면 부수 효과 함수 안에서 사용된 상태값이나 속성값 또는 그 두가지 값으로 계산된 어떤 값이 있을때,
  // 그것을 부수효과 안에서 사용했다면 항상 그 값은 의존성 배열에 나열해줘야 한다. (여기서는 userId)
  // EsLint에는 의존성 배열과 관련된 설정이 가능하다. (Create-react-app에는 이미 추가되어 있다.)
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, [userId]);
}
