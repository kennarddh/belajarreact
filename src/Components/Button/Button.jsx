import React from "react"

// component

//styling
import './Button.css'

const Button = (props) => {
    return (
        <>
            <a href="#" className="button">{props.name}</a>
        </>
    )
}

export default Button