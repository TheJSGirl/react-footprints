import React, {useState} from 'react';

function SimpleFormHooks() {
  const [email, setEmail] = useState("");

  const handleOnchange = (e) =>{
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (<div>
    <input type="text" value={email} onChange={handleOnchange}/>
    <button onClick={() => setEmail("")}>Submit</button>
  </div>)
}

export default SimpleFormHooks;