import React from "react";
import { Link } from 'react-router-dom'

// component

//styling
import './GamedetailsButton.css'


const ShowIcon = (props) => {
    if ('play' in props.props) {
        return (
            <>
                <img src="/asset/icon/game-pad.svg" alt="game-pad" />
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
            <Link to={`/game/${(props.link !== undefined) ? props.link : '#'}`}>
                <div className="play-button">
                    <p className="item">{props.text}</p>
                    <ShowIcon props={props} />
                </div>
            </Link>
        </>
    )
}

export default GamedetailsButton