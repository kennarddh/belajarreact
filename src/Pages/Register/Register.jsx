import React from "react"

// component
import Navbar from "../../Components/Navbar/Navbar"
import RegisterModal from "../../Components/RegisterModal/RegisterModal"

//styling
import './Register.css'


const Register = () => {
    return (
        <>
            <Navbar register />
            <div className="register-background" style={{
                background: 'url(/background.jpg)'
            }}>
                <h1>Join and Play with Friends</h1>
                <RegisterModal />
            </div>
        </>
    )
}

export default Register