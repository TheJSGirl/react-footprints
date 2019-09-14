import React, {useState, useEffect} from 'react';

function Clicker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You have Clicked ${count} times`;
  })
  return (
    <button onClick={() => setCount(count+1)}>Click Me {count}</button>
  )
}

export default Clicker;