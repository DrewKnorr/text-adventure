import React, { Component} from "react";


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
        
            player_details : {
                name:'TEST',
                race:'',
                class:''
            },
            player_invintory : {
                bag:['','','','','','','','',''],
                belt:['','','',''],
                key_ring:[],
                equiped : {
                    head:'',
                    neck:'',
                    chest:'',
                    sholder: '',
                    waist:'',
                    legs:'',
                    feet:'',
                    arms:'',
                    hands:'',
                    wepon_slot_one:'',
                    wepon_slot_two:''
                }
                
            }
        }
    }

}