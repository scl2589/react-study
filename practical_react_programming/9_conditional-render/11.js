// Parent 컴포넌트에서 차일드 컴포넌트 렌더링
function Parent({ user }) {
  return (
    <div>
      <p>Parent</p>
      {/* <Child user={user} /> */}
      {/* Child 컴포넌트에서 user가 있는지 확인하기 보다는
      Parent 컴포넌트 자체에서 먼저 user가 있는지 확인한다! 
      */}
      {user && <Child user={user} />}
    </div>
  );
}

function Child({ user }) {
  const [v, setV] = useState(0);
  //   if (user) {
  //     return null;
  //   }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>
  );
}
