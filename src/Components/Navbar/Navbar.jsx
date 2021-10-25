import React from "react"

// component

//styling
import './Navbar.css'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar">
                <div className="left">
                    <a href="/" className="item">Game Center</a>
                </div>
                <div className="right">
                    <a href={`${!('login' in props) ? '/login' : '#'}`} className="item active">Login</a>
                    <a href={`${!('register' in props) ? '/register' : '#'}`} className="item">Register</a>
                    <a href={`${!('gamelist' in props) ? '/gamelist' : '#'}`} className="item">Game List</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar