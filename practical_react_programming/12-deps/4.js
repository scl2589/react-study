/**
 * 시간을 3가지 부분을 상태값으로 관리한다.
 * 그리고 부수효과 함수 안에서, 1초마다 한 번씩 시간을 업데이트 한다
 * setInterval을 사용했고, clearInterval을 사용했다.
 * 이 3가지 상태값을 의존성 배열에 넣은 상태이다.
 * 여기서 setInterval을 사용한 것이 무색한것이 1초마다 clearInterval을 호출하고 다시 setInterval을 호출한다.
 * 즉 너무 비효율적이다!
 *
 */
function Timer({ initialTotalSeconds }) {
  const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
  const [minute, setMinute] = useState(
    Math.floor((initialTotalSeconds % 3600) / 60)
  );
  const [second, setSecond] = useState(initialTotalSeconds % 60);
  useEffect(() => {
    const id = setInterval(() => {
      if (second) {
        setSecond(second - 1);
      } else if (minute) {
        setMinute(minute - 1);
        setSecond(59);
      } else if (hour) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [hour, minute, second]);
}
