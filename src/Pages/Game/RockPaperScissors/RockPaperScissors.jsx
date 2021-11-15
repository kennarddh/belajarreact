import React, { useState } from "react";

// component
import MemberNavbar from "../../../Components/MemberNavbar/MemberNavbar";
import Title from "../../../Components/Title/Title";

//styling
import './RockPaperScissors.css'


const RockPaperScissors = (props) => {
    const [Result, SetResult] = useState("")

    const [ComputerChoice, SetComputerChoice] = useState("")
    const [PlayerChoice, SetPlayerChoice] = useState("")

    const [PlayerScore, SetPlayerScore] = useState(0)
    const [ComputerScore, SetComputerScore] = useState(0)

    const ShowResultImage = (props) => {
        if ('win' === props.result) {
            return (
                <>
                    <img src="/asset/game/RockPaperScissors/win.png" alt="win" />
                </>
            )
        } else if ('lose' === props.result) {
            return (
                <>
                    <img src="/asset/game/RockPaperScissors/lose.png" alt="lose" />
                </>
            )
        } else if ('draw' === props.result) {
            return (
                <>
                    <img src="/asset/game/RockPaperScissors/draw.png" alt="draw" />
                </>
            )
        } else {
            return (
                <>
                    
                </>
            )
        }
    }

    const CheckWinner = (computerChoice, playerChoice) => {
        if (playerChoice === computerChoice) return 'tie'
        if (playerChoice === `rock`) return computerChoice === `paper` ? 'lose' : 'win'
        if (playerChoice === `scissors`) return computerChoice === `paper` ? 'win' : 'lose'
        if (playerChoice === `paper`) return computerChoice === `rock` ? 'win' : 'lose'
    }

    const Check = (e) => {
        const choices = ["rock", "paper", "scissors"]
        
        const computerChoice = choices[Math.floor(Math.random() * 3)]
        const playerChoice = e.target.dataset.id
        
        SetComputerChoice(computerChoice)
        SetPlayerChoice(playerChoice)

        const result = CheckWinner(computerChoice, playerChoice)

        if (result === "win") {
            SetPlayerScore(PlayerScore + 1)
            SetResult('win')
        } else if (result === "lose") {
            SetComputerScore(ComputerScore + 1)
            SetResult('lose')
        } else {
            SetResult('draw')
        }
    }

    return (
        <>
            <MemberNavbar NowMode={props.NowMode} ToggleMode={props.ToggleMode} name="Player Name" score="46" />
            <Title title="Rock paper scissors" />
            <div className="rock-paper-scissors-game">
                <div className="player">
                    <h3>Player</h3>
                    <h4>Score : {PlayerScore}</h4>
                    <div className="image">
                        <img src="/asset/game/RockPaperScissors/rock.png" onClick={Check} data-id="rock" alt="rock" className={`item${(PlayerChoice === 'rock') ? ' active' : ''}`} />
                        <img src="/asset/game/RockPaperScissors/paper.png" onClick={Check} data-id="paper" alt="paper" className={`item${(PlayerChoice === 'paper') ? ' active' : ''}`} />
                        <img src="/asset/game/RockPaperScissors/scissors.png" onClick={Check} data-id="scissors" alt="scissors" className={`item${(PlayerChoice === 'scissors') ? ' active' : ''}`} />
                    </div>
                </div>
                <div className="result-image">
                    <ShowResultImage result={Result} />
                </div>
                <div className="computer">
                    <h3>Computer</h3>
                    <h4>Score : {ComputerScore}</h4>
                    <div className="image">
                        <img src="/asset/game/RockPaperScissors/rock.png" alt="rock" className={`item${(ComputerChoice === 'rock') ? ' active' : ''}`} />
                        <img src="/asset/game/RockPaperScissors/paper.png" alt="paper" className={`item${(ComputerChoice === 'paper') ? ' active' : ''}`} />
                        <img src="/asset/game/RockPaperScissors/scissors.png" alt="scissors" className={`item${(ComputerChoice === 'scissors') ? ' active' : ''}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RockPaperScissors