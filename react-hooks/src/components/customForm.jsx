import React from 'react';
import useFormState from '../hooks/useFormState';

function SimpleFormHooks() {
  const [email, handleOnchange, reset] = useFormState("");

  return (<div>
    <input type="text" value={email} onChange={handleOnchange}/>
    <button onClick={reset}>Submit</button>
  </div>)
}

export default SimpleFormHooks;