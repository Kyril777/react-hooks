/* UseContext.js */

import React, { useContext } from 'react';

function Present() {
  const value = useContext(Context);
  return <div>{value}.</div>;
}
