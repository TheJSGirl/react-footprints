import React, {useState} from 'react';

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [isAngry, setIsAngry] = useState(false);

    const toggle = () => {
        setIsHappy(!isHappy);
    }
    const toggleisAngry = () => {
        setIsAngry(!isAngry)
    }
    return (
        <div>
            <h1 onClick={toggle}>{isHappy ? "🙂🙂🙂🙂🙂🙂🙂" : "😔😔😔😔😔😔😔"}</h1>
            <h1 onClick={toggleisAngry}>{isAngry ? "😡😡😡😡😡😡" : " 🤗 🤗 🤗 🤗 🤗 🤗"}</h1>
        </div>
    )
}

export default Toggler;