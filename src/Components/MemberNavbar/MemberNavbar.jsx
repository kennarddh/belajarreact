import React from 'react'
import { Link } from 'react-router-dom'

// component

//styling
import './MemberNavbar.css'

const MemberNavbar = (props) => {
	return (
		<>
			<nav className='member-navbar'>
				<div className='left'>
					<p className='item'>{props.name}</p>
					<p className='item score'>Score: {props.score}</p>
				</div>
				<div className='center'>
					<Link to={`${!('profile' in props) ? '/profile' : '#'}`}>
						<p className={`item ${'profile' in props ? 'active' : ''}`}>Profile</p>
					</Link>
					<Link to={`${!('playerlist' in props) ? '/playerlist' : '#'}`}>
						<p className={`item ${'playerlist' in props ? 'active' : ''}`}>Player List</p>
					</Link>
					<Link to={`${!('gamelist' in props) ? '/gamelist' : '#'}`}>
						<p className={`item ${'gamelist' in props ? 'active' : ''}`}>Game List</p>
					</Link>
				</div>
				<div className='right'>
					<p className='item smaller toggle-mode' onClick={props.ToggleMode}>
						{props.NowMode}
					</p>
					<a href='#' className='item smaller'>
						Logout
					</a>
				</div>
			</nav>
		</>
	)
}

export default MemberNavbar
