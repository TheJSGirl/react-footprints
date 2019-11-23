
import React, {useState, useEffect} from 'react';

const ButtonComponent = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(1);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, []);
  
  const handleClick = () => {
    setCount(count+1);
  }

  
  return ( <div>
    <button onClick={() => handleClick()} >Click Me</button>
    <p>{count}</p>
  </div>)
}

export default ButtonComponent;