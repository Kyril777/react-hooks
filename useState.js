import React, { useState } from 'react';

function ClickTracker() {
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
