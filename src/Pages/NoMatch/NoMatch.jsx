import React from "react"

// component
import Navbar from "../../Components/Navbar/Navbar";

//styling
import './NoMatch.css'


const NoMatch = (props) => {
    return (
        <>
            <Navbar NowMode={props.NowMode} ToggleMode={props.ToggleMode} />
            <div className="no-match">
                <div className="body">
                    <h1>404</h1>
                    <p>This page could not be found.</p>
                </div>
            </div>
        </>
    )
}

export default NoMatch