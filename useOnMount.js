/* useOnMount runs code when the component is mounting */

const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount();
  }, []);


import React from "react";
import { useOnMount } from "react-hookedup";

export default function App() {
  useOnMount(() => console.log("mounted"));

  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}
