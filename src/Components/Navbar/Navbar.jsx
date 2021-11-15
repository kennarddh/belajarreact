import React from 'react'

// component

//styling
import './Navbar.css'

const Navbar = (props) => {
	return (
		<>
			<nav className='navbar'>
				<div className='left'>
					<a href='/' className='item'>
						Game Center
					</a>
				</div>
				<div className='right'>
					<a href={`${!('login' in props) ? '/login' : '#'}`} className={`item${'login' in props ? ' active' : ''}`}>
						Login
					</a>
					<a href={`${!('register' in props) ? '/register' : '#'}`} className={`item${'register' in props ? ' active' : ''}`}>
						Register
					</a>
					<a href={`${!('gamelist' in props) ? '/gamelist' : '#'}`} className={`item${'gamelist' in props ? ' active' : ''}`}>
						Game List
					</a>
					<p className='item smaller toggle-mode' onClick={props.ToggleMode}>
						{props.NowMode}
					</p>
				</div>
			</nav>
		</>
	)
}

export default Navbar
