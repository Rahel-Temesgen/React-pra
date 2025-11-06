import React, { useState } from 'react'
import './CountButton.css'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + props.increamentBy);
    }


    const divStyle = {
        margin: "6px"
    }

    const buttonStyle = {
        background: props.background,
    }

    return (
    <div style={divStyle}>
        <button style={buttonStyle} className='count-button' onClick={handleClick}>+{props.increamentBy}</button>
        <div id="current-count">{currentCount}</div>
    </div>
    )
}

export default CountButton