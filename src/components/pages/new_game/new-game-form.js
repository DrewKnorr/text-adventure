import React, { Component } from "react";
import {Route, Redirect } from 'react-router-dom'
import MainGame from '../game_play/main-game'


export default class NewGameForm extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            player_description:{
                name:"Andrew",
                race:"elf",
                specialty:"wizzard",
                gender:"male",
                race_discription:'',
                class_discription:''
            },
            player_invintory:{
                bag :["","","","","","","","","",""],
                waist:["","","","",""],
                key_ring:[]
            },
            player_stats:{
                heath:100,
                mana:0,
                stamina:25,
                dexterity:15
            }
            ,
            new_hide:'',
            game_ready:false
            
    };

    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRaceChange = this.handleRaceChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
    this.handleInventory = this.handleInventory.bind(this);
    };

    

    handleSubmit(event){
        event.preventDefault();
        alert(`Welcome ${this.state.player_description.name}!!!\n Your Adventure Is About To Begin!!!\nThank You For Playing And Enjoy`);
        console.log("Redirecting")
        this.handleInventory();
        this.setState({
            player_description:{
                name:this.state.player_description.name,
                race: this.state.player_description.race,
                specialty : this.state.player_description.specialty,
                gender : this.state.player_description.gender,
                race_discription :this.state.player_description.race_discription,
                class_discription : this.state.player_description.class_discription,
            },
            player_invintory:this.state.player_invintory,
            new_hide:'hidden',
            game_ready:true
        })
    
    }

    handleInventory(){
        console.log("COMPLETITING LOAD OUT")
        let player_class = this.state.player_description.specialty;
        console
        if(player_class === "warrior"){
            this.state.player_invintory.bag.push("Bread")
            this.state.player_invintory.waist.push("Great Sword")
            this.state.player_invintory.waist.push("Dagger")
        }
        else if(player_class === "wizzard"){
            this.state.player_invintory.bag.push("Magic Components")
            this.state.player_invintory.bag.push("Ink")
            this.state.player_invintory.bag.push("Blank Scrolls")
            this.state.player_invintory.waist.push("Magic Staff")
            this.state.player_invintory.waist.push("Dagger")
        }
        else if(player_class ==="cleric"){
            this.setState({
                player_description:this.state.player_description,
                player_invintory:{
                    bag :["Prayer Beads","","","","","","","","",""],
                    waist:["Mace","Tome","","",""],
                    key_ring:[]
                }
            })
            this.state.player_invintory.bag.push("Player Beads")
            this.state.player_invintory.waist.push("Mace")
            this.state.player_invintory.waist.push("Tome")
        }
        else if(player_class ==="theif"){
            this.state.player_invintory.bag.push("Theif Tools")
            this.state.player_invintory.waist.push("Short Sword")
            this.state.player_invintory.waist.push("Dagger")
        }
        console.log(this.state.player_invintory.bag)
    }

    handleNameChange(event){
        this.setState({
            player_description:{
                name:event.target.value,
                race: this.state.player_description.race,
                specialty : this.state.player_description.specialty,
                gender : this.state.player_description.gender,
                race_discription :this.state.player_description.race_discription,
                class_discription : this.state.player_description.class_discription

            }
        })
    }
    handleGenderChange(event){
        console.log("SETTING GENDER")
        this.setState({
            player_description:{
                name:this.state.player_description.name,
                race: this.state.player_description.race,
                specialty : this.state.player_description.specialty,
                gender : event.target.value,
                race_discription :this.state.player_description.race_discription,
                class_discription : this.state.player_description.class_discription

            }
        })
        let temp_var = this.state.player_description.gender;
        console.log(temp_var)
    }


    handleRaceChange(event){
        console.log("SETTING RACE")
        let temp_race = event.target.value;
        let temp_discription;
        if(temp_race ==='human'){
            temp_discription = "\
            As a Human your life span is small compared to other creaturs\
            But Humans always seem to be capable of the most miraculous achivements\
            Known to have achived great things in all disaplins its on you to find what you will be good at!!\
            No matter what you choose you will be sure to leave a trail of foes defeated along the way"
        }
        else if(temp_race ==='elf'){
            temp_discription = "As an elegant Elf you've live hundreds of years, never aging\
            You find the centurys a fleating as minutes, lesser beings could never transend to your level\
            Not only do you posess youth beyond your years, you are as quick as a wolf and just as deadly\
            You bring a bit a wisdom to those around you and are a force to be reconed with!"
        }
        else if(temp_race ==='gnome'){
            temp_discription= "As a Gnome, you see things in a mechanical manner, more interesed about how things work then what they will be used for\
            Despite your short stature you are as deadly as they come, building all manner of weapons and traps to keep you and your allys safe\
            Gomes are a kind and loving culture and bring a spirit that can turn any battle feild in there favor!!!"
        }
        else if(temp_race ==='orc'){
            temp_discription="As a Orc your first thought is how fast can I tear apart the thing in front of me\
            Rest assured its quite fast, as an Orc you are massive in stature and have the brute to back up any bark\
            Its said that Orcs go into a sort of trance in the mists of battel, becoming enraged and destroying legons of men\
            The word Orc still sends shivers down the spine of some men and most Goblins, You'll be sure to go down swinging!!!"
        }
        else if(temp_race ==='goblin'){
            temp_discription="As a Goblin your used to small holes and wet forests, Always being hunted for just being no good\
            Your here to show the world that not all Goblins are the same, With a smile full of razor sharp teeth you set forth to show that \
            when you look past the scally skin and the yellow eyes, You are here to make a diffrence. Goblins are know for there cunning wit and there shaddowy abilitys\
            If you get your pray in a dark space, well no one whos gone into a Goblins den has ever been seen again.... Good Luck out there!!!!"
        }
        else if(temp_race ==='fallen'){
            temp_discription="As a fallen your name is more litteral then most others, being you are a fallen angel\
            Whether its because you where cast out or becuase you choose to leave, you now rome the mortal plane\
            You do good where you can but now you can really streach those blacked wings of yours and take life by the horns\
            You will run into people who will be smittin by you, but you will alos meet those who wish your destruction for falling from grace!!"
        }
        
        this.setState({
            player_description:{
                name:this.state.player_description.name,
                race: event.target.value,
                specialty : this.state.player_description.specialty,
                gender : this.state.player_description.gender,
                race_discription :temp_discription,
                class_discription : this.state.player_description.class_discription

            }
        })
    }
    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    handleClassChange(event){
        console.log("SETTING CLASS")
        let temp_class = event.target.value;
        let temp_discription;
        if(temp_class ==='warrior'){
            temp_discription = "As a Warrior you job is to hit things.... very hard.... preferably with a large wepon!\
            You are the first one to draw your sword and the fist to drink the first keg of mead\
            You've spent years training to become a unstopable force, moving with the migth of a typhoon, and the grace of a cow\
            With your great sword in one hand and your appatie for battle you set forth into the world, Hungry for the the right battel!!!"
        }
        else if(temp_class ==='wizzard'){
            temp_discription = "As a Wizzard you've dedicated yourself to all matters of the arcaine and phantasimal\
            You tend to use your magic as your first second and last lines of defense\
            Wether your slinging fire balls or opening portals to the fire plane you are all about magic\
            With your acane focus in one hand and your staff in another you take off into the wordl to discover magic uknown!\
            "
        }
        else if(temp_class ==='cleric'){
            temp_discription= "As a Cleric you spend your time praying and spreading the word of your lord\
            To some you are but a weak preist... lest they find you have the devine wrath of your god bestoed upon you\
            With your flaming mace in one hand and your tome in the other you set forth in the name of your lord\
            Forward you go on a quest to spread the word of your god!"
        }
        else if(temp_class ==='theif'){
            temp_discription="As a Theif you've spent alot of time in, out, and around jail.\
            You've grown up in underbelly of this world, fighting for everything you have \
            You look out for number one, and no one is going to stop you from living the high life!\
            With your theifs tools and your dagger you sneak out of the tavern, hoping to skip out on your bill!\
            Going out into the night you find the world full of possiblitys"
        }
        
        this.setState({
            player_description:{
                name:this.state.player_description.name,
                race: this.state.player_description.race,
                specialty : event.target.value,
                gender : this.state.player_description.gender,
                race_discription :this.state.player_description.race_discription,
                class_discription : temp_discription
            }
        })
    }

    render(){
        if(this.state.game_ready === true){
            return(<MainGame player_description={this.state.player_description} player_stats={this.state.player_stats} player_invintory={this.state.player_invintory}/>)
        }
        return(
            <div className="character-wrapper" style={{visibility:this.state.new_hide}}>
                <Route path="/game_play/main-game" component={MainGame}/>
                <div className="description-box">
                    <h2>Race</h2>
                    <div className="race-description">
                        <h4>{this.Capitalize(this.state.player_description.race)}</h4>
                        <p>{this.state.player_description.race_discription}</p>
                    </div>
                    <h2>Class</h2>
                    <div className="class-description">
                        <h4>{this.Capitalize(this.state.player_description.specialty)}</h4>
                        <p>{this.state.player_description.class_discription}</p>
                    </div>
                </div>
                <form className="build-character-form" onSubmit={this.handleSubmit}>
                    <div className="name-input">
                        <h4>Name:</h4>
                        <input type="text" 
                        value={this.state.player_description.name} 
                        name="name" 
                        onChange={this.handleNameChange}
                        />
                        
                    </div>
                    
                    <div className="gender-select">
                        <h4>Gender: </h4>
                        <label className="gender-containers">
                            <h5>Male</h5>
                            <input type="radio" value="male" name="gender"
                            checked={this.state.player_description.gender === "male"}
                            onChange={this.handleGenderChange}
                            />
                        </label>
                        <label className="gender-containers">
                            <h5>Female</h5>
                            <input type="radio" value="female" name="gender"
                            checked={this.state.player_description.gender === "female"}
                            onChange={this.handleGenderChange}
                            />
                        </label>
                         
                    </div>
                    <div className="race-select">
                        <h4>Race:</h4>
                        <label className="race-containers">
                            <h4>Human</h4>
                            <input type="radio" value="human" name="race"
                            checked={this.state.player_description.race ==="human"}
                            onChange={this.handleRaceChange}
                            />
                        </label>
                        <label className="race-containers">
                            <h4>Elf</h4>
                            <input type="radio" value="elf" name="race"
                            checked={this.state.player_description.race ==="elf"}
                            onChange={this.handleRaceChange}
                            />
                        </label>
                        <label className="race-containers">
                            <h4>Gnome</h4>
                            <input type="radio" value="gnome" name="race"
                            checked={this.state.player_description.race ==="gnome"}
                            onChange={this.handleRaceChange}
                            />
                        </label>
                        <label className="race-containers">
                            <h4>Orc</h4>
                            <input type="radio" value="orc" name="race"
                            checked={this.state.player_description.race ==="orc"}
                            onChange={this.handleRaceChange}
                            />
                        </label>
                        <label className="race-containers">
                            <h4>Goblin</h4>
                            <input type="radio" value="goblin" name="race"
                            checked={this.state.player_description.race ==="goblin"}
                            onChange={this.handleRaceChange}
                            />
                        </label>
                        <label className="race-containers">
                            <h4>Fallen</h4>
                            <input type="radio" value="fallen" name="race"
                            checked={this.state.player_description.race ==="fallen"}
                            onChange={this.handleRaceChange}
                            />
                        </label>
                    </div>
                    <div className="class-select">
                        <h4>Class:</h4>
                        <label className="class-containers">
                                <h4>Warrior</h4>
                                <input type="radio" value="warrior" name="class"
                                checked={this.state.player_description.specialty ==="warrior"}
                                onChange={this.handleClassChange}
                                />
                        </label>
                        <label className="class-containers">
                                <h4>Wizzard</h4>
                                <input type="radio" value="wizzard" name="class"
                                checked={this.state.player_description.specialty ==="wizzard"}
                                onChange={this.handleClassChange}
                                />
                        </label>
                        <label className="class-containers">
                                <h4>Cleric</h4>
                                <input type="radio" value="cleric" name="class"
                                checked={this.state.player_description.specialty ==="cleric"}
                                onChange={this.handleClassChange}
                                />
                        </label>
                        <label className="class-containers">
                                <h4>Theif</h4>
                                <input type="radio" value="theif" name="class"
                                checked={this.state.player_description.specialty ==="theif"}
                                onChange={this.handleClassChange}
                                />
                        </label>
                    </div>
                    <button className="smbt-btn" type="submit">Start Adventure</button>
                </form>
                <div className="character-preview">
                    <h1>Character Preview</h1>
                    <h3>Advenuters Name: {this.Capitalize(this.state.player_description.name)}</h3>
                    <h3>Advenuters Gender: {this.Capitalize(this.state.player_description.gender)}</h3>
                    <h3>Advenuters Race: {this.Capitalize(this.state.player_description.race)}</h3>
                    <h3>Advenuters Class: {this.Capitalize(this.state.player_description.specialty)}</h3>
                </div>
                <Route exact path="/game_play/main-game" component={MainGame} />
            </div>
        )
    }
}