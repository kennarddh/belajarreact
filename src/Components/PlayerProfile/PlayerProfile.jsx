import React from "react"

// component

//styling
import './PlayerProfile.css'

const PlayerProfile = (props) => {
    return (
        <>
            <div class="wrap">
                <img src="player-image.png" class="image" alt="profile" />
                <div class="body">
                    <h3 class="name">{props.name}</h3>
                    <h3 class="score">Score: {props.score}</h3>
                    <p class="email">{props.email}</p>
                </div>
                <a href="#" class="button">Edit Profile</a>
            </div>
        </>
    )
}

export default PlayerProfile