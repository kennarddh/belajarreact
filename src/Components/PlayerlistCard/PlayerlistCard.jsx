import React from "react"

// component
import Button from '../Button/Button'

//styling
import './PlayerlistCard.css'

const PlayerlistCard = (props) => {
    return (
        <>
            <div className="playerlist-card">
                <img src="player-image.png" className="image" alt="card" />
                <div className="body">
                    <h3>{props.name}</h3>
                    <p>Score: {props.score}</p>
                </div>
                <Button name="See Detail" />
            </div>
        </>
    )
}

export default PlayerlistCard