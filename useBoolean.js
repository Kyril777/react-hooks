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
