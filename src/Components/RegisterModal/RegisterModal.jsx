import React from "react"

// component
import AuthButton from '../../Components/AuthButton/AuthButton'

//styling
import './RegisterModal.css'


const RegisterModal = () => {
    return (
        <>
            <section className="register-modal">
                <h3>Register</h3>
                <form action="" method="get" className="form">
                    <input type="text" className="name text-input" name="name" placeholder="Name" />
                    <input type="text" className="username text-input" name="username" placeholder="Username" />
                    <input type="email" className="email text-input" name="email" placeholder="Email" />
                    <input type="password" className="password text-input" name="password" placeholder="Password" />
                    <AuthButton text="Register" />
                </form>
            </section>
        </>
    )
}

export default RegisterModal