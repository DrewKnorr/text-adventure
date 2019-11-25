import React, { Component} from "react";
import NewGame from "./new_game/new-game";



export default class Home extends Component{
    constructor(){
        super();

        this.state = {
            btn_visiblity: 'visible',
            new_game_visiblity: 'hidden'
        }
        this.start_new_game = this.start_new_game.bind(this);
    }

    start_new_game(event){
        let temp_val = event.target.value;
        if (temp_val === 'visible'){
            this.setState({
                btn_visiblity : 'hidden',
                new_game_visiblity : 'visible'
            });

        }
    }
    

    render(){
        return(
            <div className="home-wrapper" >
                <div className="new-game-wrapper" style={{visibility:this.state.new_game_visiblity}}>
                    <NewGame/>
                </div>
                <button className="start-btn" style={{visibility:this.state.btn_visiblity}} type="text"  value={this.state.btn_visiblity} onClick={this.start_new_game} >New Character</button>
            </div>
            
        )
    }
}