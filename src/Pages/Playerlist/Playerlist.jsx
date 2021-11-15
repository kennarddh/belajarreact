import React from "react"

// component
import MemberNavbar from "../../Components/MemberNavbar/MemberNavbar"
import Title from "../../Components/Title/Title"
import PlayerlistCard from "../../Components/PlayerlistCard/PlayerlistCard"

//styling
import './Playerlist.css'

const Playerlist = (props) => {
    return (
        <>
            <MemberNavbar NowMode={props.NowMode} ToggleMode={props.ToggleMode} score="46" name="Player Name" playerlist />
            <Title title="Player List" />
            <div className="section-player">
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
                <PlayerlistCard name="Player Name" score="10" />
            </div>
        </>
    )
}

export default Playerlist