import React  from "react";

// component

//styling
import './GamedetailsButton.css'


const ShowIcon = (props) => {
    if ('play' in props.props) {
        return (
            <>
                <img src="game-pad.svg" alt="game-pad" />
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

const GamedetailsButton = (props) => {
    return (
        <>
            <a href="game/index.html" className="play-button">
                <p className="item">{props.text}</p>
                <ShowIcon props={props} />
            </a>
        </>
    )
}

export default GamedetailsButton