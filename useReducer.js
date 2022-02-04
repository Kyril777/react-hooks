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
