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



import { useId } from 'react'

function App() {
  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={`email-${id}`}>Email</label>
        <input id={`email-${id}`} type="text" placeholder='Email' />
      </div>
      <div>
        <label htmlFor={`password-${id}`}>Password</label>
        <input id={`password-${id}`} type="password" placeholder='Password' />
      </div>
    </form>
  );
}
