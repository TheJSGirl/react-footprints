import React, {useState} from 'react';

function useFormState(initialValue="") {
  const [email, setEmail] = useState(initialValue);
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  }
  const reset = () => {
    setEmail("");
  }
  return [email, handleOnChange, reset]
}

export default useFormState;