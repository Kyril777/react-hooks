/*  useArray allows for various array manipulation methods. Adding elements to an array or removing an element at a given index becomes convenient.  */ 

import {useArray} from 'react-hanger';

const App = () => {
  const todos = useArray(["Item 1"]);
  return todos.value.map(todo => <div>{todo}</div>);
}
