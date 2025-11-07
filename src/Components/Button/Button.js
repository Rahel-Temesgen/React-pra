import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button style={{color: "yellow", background: "black", borderRadius: "5px", margin: "2px"}}>{props.children}</button>
        </div>
    )
}

export default Button