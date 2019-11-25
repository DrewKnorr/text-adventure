import React, { Component } from "react";

import NewGameForm from "./new-game-form"

export default class NewGame extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="main-game-wrapper">
                <NewGameForm/>
            </div>

        )
    }
}