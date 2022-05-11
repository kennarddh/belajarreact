import React from "react"

// component
import Navbar from "../../Components/Navbar/Navbar"
import LoginModal from "../../Components/LoginModal/LoginModal"

//styling
import './Login.css'

const Login = (props) => {
    return (
        <>
            <Navbar NowMode={props.NowMode} ToggleMode={props.ToggleMode} login />
            <div className="login-background" style={{
                background: 'url(/asset/image/background.jpg)'
            }}>
                <h1>One Step Closer</h1>
                <LoginModal />
            </div>
        </>
    )
}

export default Login