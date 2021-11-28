import React from 'react'

// component
import GamelistCard from '../../Components/GamelistCard/GamelistCard'
import MemberNavbar from '../../Components/MemberNavbar/MemberNavbar'
import Title from '../../Components/Title/Title'
import Search from '../../Components/Search/Search'

//styling
import './Gamelist.css'

const Gamelist = (props) => {
	const game = [
		{
			id: 1,
			title: 'Rock Paper Scissors',
			gamelink: 'rock_paper_scissors',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
		{
			id: 2,
			title: 'Tic Tac Toe',
			gamelink: 'tic_tac_toe',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
		{
			id: 3,
			title: 'Rock Paper Scissors',
			gamelink: 'rock_paper_scissors',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
		{
			id: 4,
			title: 'Rock Paper Scissors',
			gamelink: 'rock_paper_scissors',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
		{
			id: 5,
			title: 'Rock Paper Scissors',
			gamelink: 'rock_paper_scissors',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
		{
			id: 6,
			title: 'Rock Paper Scissors',
			gamelink: 'rock_paper_scissors',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
		{
			id: 7,
			title: 'Rock Paper Scissors',
			gamelink: 'rock_paper_scissors',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
		{
			id: 8,
			title: 'Rock Paper Scissors',
			gamelink: 'rock_paper_scissors',
			description: 'Rock paper scissors is a hand game usually played between two people, in which ...',
			played: 15,
		},
	]
	return (
		<>
			<MemberNavbar score='46' name='Player Name' NowMode={props.NowMode} ToggleMode={props.ToggleMode} gamelist />
			<Title title='Game List' />
			<Search />
			<section className='section-game'>
				{game.map((item) => (
					<GamelistCard key={item.id} title={item.title} gamelink={item.gamelink} description={item.description} played={item.played} />
				))}
			</section>
		</>
	)
}

export default Gamelist
