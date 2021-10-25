import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Gamelist from './Pages/Gamelist/Gamelist';
import Playerlist from './Pages/Playerlist/Playerlist';
import Profile from './Pages/Profile/Profile';
import Gamedetails from './Pages/Gamedetails/Gamedetails';
import Login from './Pages/Login/Login';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/gamelist">
                    <Gamelist />
                </Route>
                <Route path="/playerlist">
                    <Playerlist />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/gamedetails">
                    <Gamedetails />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
