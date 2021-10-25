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
            </Switch>
        </Router>
    )
}

export default App
