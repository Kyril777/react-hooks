/* useBoolean.js hook. */

import React from "react";
import { useBoolean } from "react-hookedup";

export default function App() {
  const { toggle, value } = useBoolean(false);

  return (
    <div>
      <button onClick={() => toggle()}>toggle</button>
      <p>{JSON.stringify(value)}</p>
    </div>
  );
}


/* useBoolean for toggle state. */
const hello = () => {
  const [ state, toggleState ] = useBoolean();
  
  return (
    <div class="container">
        <button onClick={toggleState}>Toggle</button>
        <span className="state">{ state ? "on" : "off"}</span>
    </div>
  );
}
