// useOnUnmount hook to run code when the component unmounts.

const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, []);


import React from "react";
import { useOnUnmount } from "react-hookedup";

export default function App() {
  useOnUnmount(() => console.log("unmount"));

  return (
    <div>
      <p>hello world</p>
    </div>
  );
}
