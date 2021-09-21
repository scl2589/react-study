// 서로 연관된 코드는 한 곳으로 모아서 관리하는 것이 좋다.
function Profile({ userId }) {
  // 훅의 종류별로, useState를 위에 모아놓고, useEffect를 밑에 모아놓는 것보다
  // 서로 연관된 코드끼리 모아 보는게 가독성에 좋다
  // 이렇게 모아놓으면 별도로 커스텀 훅으로 분리할 수 있다. (커스텀훅은 아래에서!)
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
}

// 서로 연관된 코드는 한 곳으로 모아서 관리하는 것이 좋다.
function Profile({ userId }) {
  const user = useUser(userId);
  const width = useWindowWidth();
}
