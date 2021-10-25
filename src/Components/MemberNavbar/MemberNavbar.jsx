import React from "react"

// component

//styling
import "./MemberNavbar.css"

const MemberNavbar = (props) => {
    return (
        <>
            <nav className="member-navbar">
                <div className="left">
                    <p className="item">{props.name}</p>
                    <p className="item score">Score: {props.score}</p>
                </div>
                <div className="center">
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

export default MemberNavbar