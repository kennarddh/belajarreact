import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Gamelist from './Pages/Gamelist/Gamelist';
import Playerlist from './Pages/Playerlist/Playerlist';
import Profile from './Pages/Profile/Profile';
import Gamedetails from './Pages/Gamedetails/Gamedetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/NoMatch/NoMatch';

// Game
import RockPaperScissors from './Pages/Game/RockPaperScissors/RockPaperScissors';
import TicTacToe from './Pages/Game/TicTacToe/TicTacToe'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/gamelist">
                    <Gamelist />
                </Route>
                <Route path="/playerlist">
                    <Playerlist />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/gamedetails/:gamelink">
                    <Gamedetails />
                </Route>
                <Route path="/gamedetails">
                    <Redirect to="/gamelist" />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>

                {/* Game */}
                <Route path="/game/rock_paper_scissors">
                    <RockPaperScissors />
                </Route>
                <Route path="/game/tic_tac_toe">
                    <TicTacToe />
                </Route>

                {/* 404 */}
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
