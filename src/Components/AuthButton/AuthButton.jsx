import React from "react"

// component

//styling
import './AuthButton.css'

const AuthButton = (props) => {
    return (
        <>
            <button type="submit" className="auth-button">{props.text}</button>
        </>
    )
}

export default AuthButton