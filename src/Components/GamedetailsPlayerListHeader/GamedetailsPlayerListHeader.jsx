import React  from "react";
import { Children } from "react";

// component

//styling
import './GamedetailsPlayerListHeader.css'

const EmptyChildrenCheck = (props) => {
    if ('children' in props.props) {
        return (
            <>
                {props.props.children}
            </>
        )
    } else {
        return (
            <>
                <div className="item">
                    <p>Belum ada pemain</p>
                </div>
            </>
        )
    }
}

const GamedetailsPlayerListHeader = (props) => {
    return (
        <>
            <div className="playerlist">
                <p className="GamedetailsPlayerListHeader">Player Leaderboard</p>
                <div className="list-player">
                    <EmptyChildrenCheck props={props} />
                </div>
            </div>
        </>
    )
}

export default GamedetailsPlayerListHeader