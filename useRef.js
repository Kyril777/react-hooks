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
