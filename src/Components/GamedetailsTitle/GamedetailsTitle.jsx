import React from "react";

// component

//styling
import './GamedetailsTitle.css'

const GamedetailsTitle = (props) => {
    return (
        <>
            <div className="GamedetailsTitle">
                <h3>{props.name}</h3>
                <p>Dimainkan {props.played}x</p>
            </div>
        </>
    )
}

export default GamedetailsTitle