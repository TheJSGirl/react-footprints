import React, {useState} from 'react';

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggle = () => {
        setIsHappy(!isHappy);
    }
    return (
        <h1 onClick={toggle}>{isHappy ? "🙂🙂🙂🙂🙂🙂🙂" : "😔😔😔😔😔😔😔"}</h1>
    )
}

export default Toggler;