import React from "react"

// component
import GamelistCard from "../../Components/GamelistCard/GamelistCard"
import MemberNavbar from "../../Components/MemberNavbar/MemberNavbar"
import Title from "../../Components/Title/Title"
import Search from "../../Components/Search/Search"

//styling
import "./Gamelist.css"


const Gamelist = () => {
    return (
        <>
            <MemberNavbar score="46" name="Player Name" gamelist />
            <Title title="Game List" />
            <Search />
            <section className="section-game">
                <GamelistCard title="Rock Paper Scissors" gamelink="rock_paper_scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Tic Tac Toe" gamelink="tic_tac_toe" description="Tic tac toe ..." played="15" />
                <GamelistCard title="Rock Paper Scissors" gamelink="rock_paper_scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Rock Paper Scissors" gamelink="rock_paper_scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Rock Paper Scissors" gamelink="rock_paper_scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Rock Paper Scissors" gamelink="rock_paper_scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Rock Paper Scissors" gamelink="rock_paper_scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Rock Paper Scissors" gamelink="rock_paper_scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
            </section>
        </>
    )
}

export default Gamelist