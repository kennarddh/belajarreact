import React  from "react";

// component

//styling
import './GamedetailsDescription.css'

const GamedetailsDescription = (props) => {
    return (
        <>
            <div className="GamedetailsDescription">
                <p className="header">Game Description</p>
                <pre className="description-inner">
                    {props.description}
                </pre>
            </div>
        </>
    )
}

export default GamedetailsDescription