/* Basic syntax for click application. */
import { useReducer } from 'react';
function Component() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = {
    type: ''
  };
  return (
    <button onClick={() => dispatch(action)}>
      Click me
    </button>
  );
}


/* Increment and decrement function. */
const initialCount = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialCount;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

function counter() {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
