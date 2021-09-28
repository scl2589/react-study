function MyComponent() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    function onClick() {
      setcount(count + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
}
