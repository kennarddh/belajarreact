import React from "react"

// component

//styling
import "./GamelistCard.css"

const GamelistCard = (props) => {
    return (
        <>
            <div className="gamelist-card">
                <img src="/asset/image/card-image.png" className="image" alt="card" />
                <div className="body">
                    <h3 className="title">{props.title}</h3>
                    <p className="description">{props.description}</p>
                    <p className="played">Dimainkan {props.played}x</p>
                    <a href="/gamedetails" className="detail-wrap">
                        <p className="detail">See Detail</p>
                        <img src="/asset/icon/angle-right.svg" alt="angle right" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default GamelistCard