import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Rentals from "./Home";
import Search from "./Home";

function App() {
    return (
        <div>
            <h1>Test</h1>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/rentals">
                <Rentals />
            </Route>
            <Route path="/Search">
                <Search />
            </Route>
        </Switch>
    </div>
    )
}


export default App;
