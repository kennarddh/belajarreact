import React from "react"

// component
import GamelistCard from "../../Components/GamelistCard/GamelistCard"
import Navbar from "../../Components/Navbar/Navbar"
import Title from "../../Components/Title/Title"
import Search from "../../Components/Search/Search"

//styling
import "./Gamelist.css"


const Gamelist = () => {
    return (
        <>
            <Navbar score="46" name="Player Name" gamelist />
            <Title title="Game List" />
            <Search />
            <section className="section-game">
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
                <GamelistCard title="Papper Rock Scissors" description="Rock paper scissors is a hand game usually played between two people, in which ..." played="15" />
            </section>
        </>
    )
}

export default Gamelist