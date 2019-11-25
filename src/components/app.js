import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutUs from './pages/about-us';
import Home from './pages/home';
import HighScore from './pages/high-score';
import NavBar from './nav_bar/navBar';
import MainGame from './pages/game_play/main-game';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Nature and Twisted Dreams</h1>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route path="/high-score" component={HighScore}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/game_play/main-game" component={MainGame}/>
      </div>
    );
  }
}
