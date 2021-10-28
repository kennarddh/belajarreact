import React, { useState } from "react";

// component
import MemberNavbar from "../../../Components/MemberNavbar/MemberNavbar";
import Title from "../../../Components/Title/Title";

//styling
import './TicTacToe.css'


const TicTacToe = () => {
    const [Board, SetBoard] = useState(Array(9).fill(null))
    const [Result, SetResult] = useState('')
    const [PlayerScore, SetPlayerScore] = useState(0)
    const [ComputerScore, SetComputerScore] = useState(0)

    const CalculateWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    const ResetGame = () => {
        SetBoard(Array(9).fill(null))
        SetResult('')
    }

    const ComputerChoice = (board, emptyIndex) => {
        let boardTemp = board.slice()

        let losePosibility = []
        
        for (let i = 0; i < emptyIndex.length; i++) {
            boardTemp[emptyIndex[i]] = 'X'

            let result = CalculateWinner(boardTemp)

            if (result === 'X') {
                losePosibility.push(emptyIndex[i])
            }

            boardTemp = board.slice()
        }

        let winPosibility = []
        
        for (let i = 0; i < emptyIndex.length; i++) {
            boardTemp[emptyIndex[i]] = 'O'

            let result = CalculateWinner(boardTemp)

            if (result === 'O') {
                winPosibility.push(emptyIndex[i])
            }

            boardTemp = board.slice()
        }

        if (losePosibility.length <= 0) {
            return emptyIndex[Math.floor(Math.random() * emptyIndex.length)]
        } else {
            if (winPosibility.length <= 0) {
                return losePosibility[Math.floor(Math.random() * losePosibility.length)]
            } else {
                return winPosibility[Math.floor(Math.random() * winPosibility.length)]
            }
        }
    }

    const HandleClick = (id) => {
        const board = Board.slice()

        let emptyIndex = []

        board.map((item, index) => {
            if (item === null) {
                emptyIndex.push(index)
            }
            return item
        })

        if (board[id] === null) {
            board[id] = 'X'
            
            let checkFullBoard = []

            board.map((item, index) => {
                if (item === null) {
                    checkFullBoard.push(index)
                }
                return checkFullBoard
            })

            if (checkFullBoard.length === 0) {
                SetBoard(board)

                const result = CalculateWinner(board)

                if (result === 'X') {
                    SetResult('Win')
                    SetPlayerScore(PlayerScore + 1)
                } else if (result === 'O') {
                    SetResult('Lose')
                    SetComputerScore(ComputerScore + 1)
                } else {
                    SetResult('Draw')
                }

                return
            }

            // computer

            emptyIndex = []

            board.map((item, index) => {
                if (item === null) {
                    emptyIndex.push(index)
                }
                return item
            })
    
            const random = ComputerChoice(board, emptyIndex);
    
            board[random] = 'O'

            SetBoard(board)

            const result = CalculateWinner(board)

            if (result === 'X') {
                SetResult('Win')
                SetPlayerScore(PlayerScore + 1)
            } else if (result === 'O') {
                SetResult('Lose')
                SetComputerScore(ComputerScore + 1)
            }
        }

    }

    const Square = (props) => {
        if (Result === '') {
            return (
                <>
                    <div className="square active" onClick={() =>HandleClick(props.id)}>
                        <p>{Board[props.id]}</p>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="square">
                        <p>{Board[props.id]}</p>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <MemberNavbar name="Player Name" score="46" />
            <Title title="Tic Tac Toe" />
            <div className="tic-tac-toe">
                <div className="score">
                    <h3>Player Score : {PlayerScore}</h3>
                    <h3>Computer Score : {ComputerScore}</h3>
                </div>
                <h2>{Result}</h2>
                <p className="replay" onClick={ResetGame}>Replay</p>
                <div className="squares">
                    <Square id="0" />
                    <Square id="1" />
                    <Square id="2" />
                    <Square id="3" />
                    <Square id="4" />
                    <Square id="5" />
                    <Square id="6" />
                    <Square id="7" />
                    <Square id="8" />
                </div>
            </div>
        </>
    )
}

export default TicTacToe