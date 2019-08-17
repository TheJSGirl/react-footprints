import React from 'react';
import useFormState from '../hooks/useFormState';

function SimpleFormHooks() {
  const [email, updateEmail, resetEmail] = useFormState("");
  const [password, updatePassword, resetPassword] = useFormState("");

  return (<div>
    <input type="text" value={email} onChange={updateEmail}/>
    <input type="password" value={password} onChange={updatePassword} />
    <button onClick={resetEmail}>Submit</button>
    <button onClick={resetPassword}>Reset Password</button>
  </div>)
}

export default SimpleFormHooks;