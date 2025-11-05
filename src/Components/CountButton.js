import React, { useState } from 'react'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + props.increamentBy);
    }


    const divStyle = {
        color: "red",
        margin: "6px"
    }

    const buttonStyle = {
        background: props.background,
        fontSize: props.fontSize,
    }

    return (
    <div style={divStyle}>
        <button style={buttonStyle} onClick={handleClick}>+{props.increamentBy}</button>
        <div>{currentCount}</div>
    </div>

    )
}

export default CountButton