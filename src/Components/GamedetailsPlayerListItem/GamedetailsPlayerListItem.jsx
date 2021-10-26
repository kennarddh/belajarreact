import React from "react";

// component

//styling
import './GamedetailsPlayerListItem.css'


const GamedetailsPlayerListItem = (props) => {
    return (
        <>
            <div className="GamedetailsPlayerListItem">
                <p className="no">{props.no}.</p>
                <p className="name">{props.name}</p>
                <p className="score">{props.score}</p>
            </div>
        </>
    )
}

export default GamedetailsPlayerListItem