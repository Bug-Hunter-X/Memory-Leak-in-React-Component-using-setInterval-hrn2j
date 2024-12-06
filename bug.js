```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function doesn't include cleanup.
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    // Missing cleanup function to clear the interval
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```