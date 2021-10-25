import React  from "react";

// component
import BackButton from '../../Components/BackButtton/BackButtton'
import MemberNavbar from '../../Components/MemberNavbar/MemberNavbar'
import Title from '../../Components/Title/Title'
import GamedetailsTitle from '../../Components/GamedetailsTitle/GamedetailsTitle'
import GamedetailsButton from '../../Components/GamedetailsButton/GamedetailsButton'
import GamedetailsStatus from '../../Components/GamedetailsStatus/GamedetailsStatus'
import GamedetailsPlayerListHeader from '../../Components/GamedetailsPlayerListHeader/GamedetailsPlayerListHeader'
import GamedetailsPlayerListItem from '../../Components/GamedetailsPlayerListItem/GamedetailsPlayerListItem'
import GamedetailsDescription from '../../Components/GamedetailsDescription/GamedetailsDescription'

//styling
import './Gamedetails.css'


const Gamedetails = () => {
    return (
        <>
            <MemberNavbar score="46" name="Player Name" />
            <Title title="Game Details" />
            <section className="Gamedetails-detail">
                <BackButton />
                <GamedetailsTitle name="Papper Rock Scissors" played="10" />
                <div className="gamedetails-button">
                    <GamedetailsButton text="Play Now" play />
                    <GamedetailsStatus />
                    {/* <GamedetailsStatus played /> */}
                </div>
                <div className="list">
                    <GamedetailsPlayerListHeader>
                        <GamedetailsPlayerListItem no="1" name="Player name" score="55" />
                        <GamedetailsPlayerListItem no="1" name="Player name" score="55" />
                        <GamedetailsPlayerListItem no="1" name="Player name" score="55" />
                        <GamedetailsPlayerListItem no="1" name="Player name" score="55" />
                    </GamedetailsPlayerListHeader>
                    <GamedetailsDescription
                        description="Game ini merupakan game bla bla bla bla bla bla bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    />
                </div>
            </section>
        </>
    )
}

export default Gamedetails