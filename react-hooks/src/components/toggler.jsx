import React, {useState} from 'react';
import useToggle from '../hooks/useToggle';

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isAngry, toggleIsAngry] = useToggle(false);

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? "🙂🙂🙂🙂🙂🙂🙂" : "😔😔😔😔😔😔😔"}</h1>
            <h1 onClick={toggleIsAngry}>{isAngry ? "😡😡😡😡😡😡" : " 🤗 🤗 🤗 🤗 🤗 🤗"}</h1>
        </div>
    )
}

export default Toggler;