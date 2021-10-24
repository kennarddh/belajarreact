import React from "react"

// component

//styling
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar">
                <div className="left">
                    <p className="item">{props.name}</p>
                    <p className="item score">Score: {props.score}</p>
                </div>
                <div class="center">
                    <a href={`${!('profile' in props) ? '/profile' : '#'}`} className={`item ${'profile' in props ? 'active' : ''}`}>Profile</a>
                    <a href={`${!('playerlist' in props) ? '/playerlist' : '#'}`} className={`item ${'playerlist' in props ? 'active' : ''}`}>Player List</a>
                    <a href={`${!('gamelist' in props) ? '/gamelist' : '#'}`} className={`item ${'gamelist' in props ? 'active' : ''}`}>Game List</a>
                </div>
                <div className="right">
                    <a href="#" className="item smaller">Logout</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar