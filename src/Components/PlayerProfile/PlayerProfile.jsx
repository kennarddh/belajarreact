import React from "react"

// component
import Button from '../Button/Button'

//styling
import './PlayerProfile.css'

const PlayerProfile = (props) => {
    return (
        <>
            <div className="wrap">
                <img src="/asset/image/player-image.png" className="image" alt="profile" />
                <div className="body">
                    <h3 className="name">{props.name}</h3>
                    <h3 className="score">Score: {props.score}</h3>
                    <p className="email">{props.email}</p>
                </div>
                <Button name="Edit Profile" />
            </div>
        </>
    )
}

export default PlayerProfile