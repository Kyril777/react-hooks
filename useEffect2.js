/* useEffect hook for a countering app. If the coijt variable updates, the hook will run once more. */

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);


/* Employ the about controller API to avoid memory leaks. */
import { useEffect } from "react";

useEffect(() => {
  const control = new AbortController();
  const signal = control.signal;

  fetch(`/api/users/${id}`, { signal })
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    });
    return () => {
      control.abort();
    };
}, [id]);
