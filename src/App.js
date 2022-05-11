import React, { useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

// Pages
import Gamelist from './Pages/Gamelist/Gamelist'
import Playerlist from './Pages/Playerlist/Playerlist'
import Profile from './Pages/Profile/Profile'
import Gamedetails from './Pages/Gamedetails/Gamedetails'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import NoMatch from './Pages/NoMatch/NoMatch'

// Game
import RockPaperScissors from './Pages/Game/RockPaperScissors/RockPaperScissors'
import TicTacToe from './Pages/Game/TicTacToe/TicTacToe'

// Test
import Test from './Pages/Test/Test'

// Context
import Context from './Pages/Context/Context'

// Context Provider
import CountContextProvider from './Context/CountContext'

const App = () => {
	const DefaultColors = {
		dark: {
			primary: '#fcf8d9',
			secondary: '#000000',
			tertiary: '#ffffff',
			primaryBox: '#000000',
			background: '#272527',
		},
		light: {
			primary: '#272527',
			secondary: '#ffffff',
			tertiary: '#000000',
			primaryBox: '#000000',
			background: '#fcf8d9',
		},
	}

	const [PrimaryTextColor, SetPrimaryColor] = useState(
		DefaultColors.dark.primary
	)
	const [SecondaryTextColor, SetSecondaryColor] = useState(
		DefaultColors.dark.secondary
	)
	const [TertiaryColor, SetTertiaryColor] = useState(
		DefaultColors.dark.tertiary
	)
	const [PrimaryBoxColor, SetPrimaryBoxColor] = useState(
		DefaultColors.dark.primaryBox
	)
	const [BackgroundColor, SetBackgroundColor] = useState(
		DefaultColors.dark.background
	)

	const [NowDarkMode, SetNowDarkMode] = useState(true)

	const ToggleMode = () => {
		SetPrimaryColor(DefaultColors[NowDarkMode ? 'light' : 'dark'].primary)
		SetSecondaryColor(
			DefaultColors[NowDarkMode ? 'light' : 'dark'].secondary
		)
		SetTertiaryColor(DefaultColors[NowDarkMode ? 'light' : 'dark'].tertiary)
		SetPrimaryBoxColor(
			DefaultColors[NowDarkMode ? 'light' : 'dark'].primaryBox
		)
		SetBackgroundColor(
			DefaultColors[NowDarkMode ? 'light' : 'dark'].background
		)

		SetNowDarkMode(!NowDarkMode)
	}

	return (
		<>
			<div
				class='mode-style'
				style={{
					'--primary-color': PrimaryTextColor,
					'--secondary-color': SecondaryTextColor,
					'--tertiary-color': TertiaryColor,
					'--primary-box-color': PrimaryBoxColor,
					'--background-color': BackgroundColor,
				}}
			>
				<CountContextProvider>
					<Router>
						<Switch>
							<Route exact path='/'>
								<Home
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
							<Route path='/gamelist'>
								<Gamelist
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
							<Route path='/playerlist'>
								<Playerlist
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
							<Route path='/profile'>
								<Profile
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
							<Route path='/gamedetails/:gamelink'>
								<Gamedetails
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
							<Route path='/gamedetails'>
								<Redirect to='/gamelist' />
							</Route>
							<Route path='/login'>
								<Login
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
							<Route path='/register'>
								<Register
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>

							{/* Game */}
							<Route path='/game/rock_paper_scissors'>
								<RockPaperScissors
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
							<Route path='/game/tic_tac_toe'>
								<TicTacToe
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>

							{/* Context */}
							<Route path='/context'>
								<Context
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>

							{/* Test */}
							<Route path='/test'>
								<Test
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>

							{/* 404 */}
							<Route path='*'>
								<NoMatch
									ToggleMode={ToggleMode}
									NowMode={
										NowDarkMode ? 'Dark mode' : 'Light mode'
									}
								/>
							</Route>
						</Switch>
					</Router>
				</CountContextProvider>
			</div>
		</>
	)
}

export default App
