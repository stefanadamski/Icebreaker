import React from "react";
import Home from "./Home";
import StartPage from "./components/StartPage/StartPage.jsx";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={StartPage}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;