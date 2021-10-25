import React from 'react';
import {Switch,Route} from "react-router-dom"
import Home from "./Home"
import About from './About';
import Games from './Games';
import Movie from './Movie';
import Pricing from './Pricing';
import Downloads from './Downloads';
import Admin from './Admin';
import "./style.css"
const App = () => {
    return (
        <>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/games" component={ Games} />
            <Route path="/movies" component={Movie} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/admin" component={Admin} />
            <Route component={Error} />
        </Switch>

            
        </>
    );
};

export default App;