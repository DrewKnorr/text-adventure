import React, { Component} from "react";

import Levels from "./levels/level_handler";



export default class MainGame extends Component{
    constructor(props){
        super(props);

        this.state = {
            player_description:{
                name:this.props.player_description.name,
                race:this.props.player_description.race,
                specialty:this.props.player_description.specialty,
                gender:this.props.player_description.gender,
                race_discription:this.props.player_description.race_discription,
                class_discription:this.props.player_description.class_discription
            },
            player_invintory:{
                bag:this.props.player_invintory.bag,
                waist:this.props.player_invintory.waist,
                key_ring:this.props.player_invintory.key_ring
            },
            player_stats:{
                heath:this.props.player_stats.heath,
                mana:this.props.player_stats.mana,
                stamina:this.props.player_stats.stamina,
                dexterity:this.props.player_stats.dexterity,
                points:0,
                
            },
            scene:{
                display_text:'Enter "Start Game" To Begin Your Adventure!\n'
            },
            level:0,
            levels:Levels,
            first_time:true,
            position:'1c',
            direction:'north',
            error:''
        };
        this.handleInputCheck=this.handleInputCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.Capitalize = this.Capitalize.bind(this);

        
    };

    handleInputChange(event){
        this.setState({
            scene:{
                display_text:this.state.scene.display_text,
                player_input: event.target.value
            }

        })
    };

    handleInputCheck(player_input){

        let temp_val='';
        let player_arr = [];
        let item = '';
        let action = '';
        let direction = '';
        let temp_len ='';

        if (typeof player_input==='undefined'){
            return alert("YOU MUST SAY SOMETHING!!")
        }

        //split input 
        for(let i=0; i< player_input.length; i++){
            if(player_input.slice(i,i+1)=== ' '){
                
                player_arr.push(temp_val);
                temp_val='';
            }
            else{
                temp_val+=player_input.slice(i,i+1);
            }
 
        }

        player_arr.push(temp_val);
        
        
        temp_len = player_arr.length
        
        if (temp_len>2 && temp_len<4){
            item = player_arr.pop().toLowerCase();
            direction = player_arr.pop().toLowerCase();
            action = player_arr.pop().toLowerCase();

            this.setState(Levels(item,action,direction,this.state));
            console.log(action,direction,item)
            
        }
        else if (temp_len==2){
            item = player_arr.pop().toLowerCase();
            action = player_arr.pop().toLowerCase();
            direction = "none";

            this.setState(Levels(item,action,direction,this.state));
            console.log(action,item)
        }
        else {
            alert("Sorry We Couldn't Understand What You Said....\n Make Sure You Say Enough, But Not too Much...\n More Then One But Less Then Four Seems To Be The Trick!");
        }
         
        
      
    
    }
    
        
        

        

    

    handleSubmit(event){
        this.handleInputCheck(this.state.scene.player_input);
        event.preventDefault();
    }


    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }



    render(){
        
        return(
            <div className="game-wrapper" >
                <div className="adventure-card">
                    <div className="main-info">
                        <div className="adventure">
                            <h2>Adventure: </h2>
                            <p>{this.Capitalize(this.state.player_description.name)}</p>
                            <h2>Race:</h2>
                            <p>{this.Capitalize(this.state.player_description.race)}</p>
                            <h2>Class:</h2>
                            <p>{this.Capitalize(this.state.player_description.specialty)}</p>
                            <h2>Gender:</h2>
                            <p>{this.Capitalize(this.state.player_description.gender)}</p>
                        </div>
                    </div>
                    <button>Race Info</button>
                    <div className="hidden-info">
                        <p>{this.state.player_description.race_discription}</p>
                    </div>
                    <div className="hidden-info">
                        <p>{this.state.player_description.class_discription}</p>
                    </div>
                </div>
                <div className="play-area">
                    <form className="char-form">
                        <div className="display-window">
                            <p className="display-text">{this.state.scene.display_text}</p>
                            <p className="err-text">{this.state.error}</p>

                            <input className="player_input"  name="player_input"  type="text" onChange={this.handleInputChange}/>
                            <button className="input_btn" value={document.getElementById("player_input")} type="submit" onClick={this.handleSubmit} >Enter Action</button>
                        </div>
                        <div className="action-list">
                            
                            <div className="actions">
                                <h4>Actions:</h4>
                                <div>
                                    <h5>Touch</h5>
                                    <h5>Shake</h5>
                                    <h5>Open</h5>
                                    <h5>Attack</h5>
                                </div>
                                <div>
                                    <h5>Speak To</h5>
                                    <h5>Run</h5>
                                    <h5>Walk To</h5>
                                    <h5>Turn</h5>
                                </div>
                                <div>
                                    <h5>Look At</h5>

                                </div>
                            </div>
                            <div className="input-box">
                                <div className="inventory-card">
                                    <h4>Inventory</h4>
                                    <h5>Bag: {this.state.player_invintory.bag}</h5>
                                    <h5>Waist: {this.state.player_invintory.waist}</h5>
                                    <h5>Key Ring: {this.state.player_invintory.key_ring}</h5>
                                </div>
                                <div className="stats">
                                    <div className="player-stats">
                                        <h4>Adventures Info</h4>
                                        <h5>Health: {this.state.player_stats.heath}</h5>
                                        <h5>Mana: {this.state.player_stats.mana}</h5>
                                        <h5>Stamina: {this.state.player_stats.stamina}</h5>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>               
            </div>
            
        )
    }
}