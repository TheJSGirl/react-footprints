import React, {useEffect, useState} from 'react';

/**
 * useEffect renders after every renders method
 */

function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <button onClick={() => setCount(count+1)}>Click Me {count}</button>
    )
}

export default Clicker;