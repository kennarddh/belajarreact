import React from "react"

// component
import MemberNavbar from "../../Components/MemberNavbar/MemberNavbar"
import Title from "../../Components/Title/Title"
import PlayerProfile from "../../Components/PlayerProfile/PlayerProfile"

//styling
import './Profile.css'

const Profile = (props) => {
    return (
        <>
            <MemberNavbar NowMode={props.NowMode} ToggleMode={props.ToggleMode} score="46" name="Player Name" profile />
            <Title title="Profile" />
            <section className="profile">
                <PlayerProfile name="Player Name" score="10" email="sunboy@gmail.com" />
            </section>
        </>
    )
}

export default Profile