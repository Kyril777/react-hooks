/* UseRef */

import { useRef, useEffect } from 'react';

function AccessElement() {
  const elementRef = useRef();

   useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); 
  }, []);

  return (
    <div ref={elementRef}>
      Element
    </div>
  );
}


/* useRef for render count.  Source: w3schools.com */

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  
  // Start the count in zero.
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  // useEffect to add the county by 1.
  useEffect(() => {
    count.current = count.current + 1;
  });

   // Update when there is a change in input.
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
