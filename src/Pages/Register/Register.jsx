import React from "react"

// component
import Navbar from "../../Components/Navbar/Navbar"
import RegisterModal from "../../Components/RegisterModal/RegisterModal"

//styling
import './Register.css'


const Register = (props) => {
    return (
        <>
            <Navbar NowMode={props.NowMode} ToggleMode={props.ToggleMode} register />
            <div className="register-background" style={{
                background: 'url(/asset/image/background.jpg)'
            }}>
                <h1>Join and Play with Friends</h1>
                <RegisterModal />
            </div>
        </>
    )
}

export default Register