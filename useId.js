/* The useId hook generates stable ids during server rendering and hydration to avoid mismatches. Outside of server-rendered content, it falls back to a global counter. */

import { useId } from 'react';

const App = () {
  const id = useId();
  
  return (
    <div>
    {array.map(value => (
     <p key={useId()}> {value} </p>
    ))}  
    </div>
  );
};
