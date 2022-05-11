import React from "react"

// component
import AuthButton from '../../Components/AuthButton/AuthButton'

//styling
import './LoginModal.css'

const LoginModal = () => {
    return (
        <>
            <section className="login-modal">
                <h3>Login</h3>
                <form action="" method="get" className="form">
                    <input type="email" className="email text-input" name="email" placeholder="Email" />
                    <input type="password" className="password text-input" name="password" placeholder="Password" />
                    <AuthButton text="Log In" />
                </form>
            </section>
        </>
    )
}

export default LoginModal