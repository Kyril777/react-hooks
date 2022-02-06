/* UseCallback */

import { useCallback } from 'react';

function Component() {

  const click = useCallback(() => {
    console.log('Clicked!');
  }, []);
}

/* Source: Dmitri Pavlutin. */
import React, { useCallback } from 'react';
function MyComponent() {
  const handleClick = useCallback(() => {
    // handle the click event
  }, []);
  return <MyChild onClick={handleClick} />;
}
