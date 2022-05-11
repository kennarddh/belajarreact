import React from 'react'
import { Link } from 'react-router-dom'

// component

//styling
import './Navbar.css'

const Navbar = (props) => {
	return (
		<>
			<nav className='navbar'>
				<div className='left'>
					<Link to='/'>
						<p className='item'>Game Center</p>
					</Link>
				</div>
				<div className='right'>
					<Link to={`${!('login' in props) ? '/login' : '#'}`}>
						<p className={`item${'login' in props ? ' active' : ''}`}>Login</p>
					</Link>
					<Link to={`${!('register' in props) ? '/register' : '#'}`}>
						<p className={`item${'register' in props ? ' active' : ''}`}>Register</p>
					</Link>
					<Link to={`${!('gamelist' in props) ? '/gamelist' : '#'}`}>
						<p className={`item${'gamelist' in props ? ' active' : ''}`}>Game List</p>
					</Link>
					<p className='item smaller toggle-mode' onClick={props.ToggleMode}>
						{props.NowMode}
					</p>
				</div>
			</nav>
		</>
	)
}

export default Navbar
