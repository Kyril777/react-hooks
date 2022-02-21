/* Baisc use of useState. */

import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [capital, setCapital] = useState("Ankara");

  return <h1>The capital of Turkey is is {capital}!</h1>
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

/* useState for basic clicktracker. */
import React, { useState } from 'react';

function ClickTracker1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


/* useState for tracking clicks. */
import React, { useState } from 'react';

function ClickTracker2() {
  const [clicks, setClicks] = useState(0);

  function increment() {
    setSteps(prevState => prevState + 1);
  }

  return (
    <div>
      You have clicked {steps} times!
      <br />
      <button onClick={increment}>
        Click
      </button>
    </div>
  );
}
