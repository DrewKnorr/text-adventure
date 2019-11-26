import React, { Component} from "react";

import Random from "../errors/random_response"

export default function(item,action,directon, player){
    const compass=["north","east","souht","west"]
    let err_msg="";
    let return_text="";
    let return_state;
    let position_ct;

    

    const response_arr_center ={
        north:"Your Standing in an attic staring at a wardrobe\
        You see some room to the left and a desk against the wall to the right\
        Behind you is the ladder that takes you down to the home below",
        east:"",
        south:"",
        west:""

        
    }

    const response_arr_left={
        north:"Your Standing in an attic staring at a wardrobe\
        You see some room to the left and a desk against the wall to the right\
        Behind you is the ladder that takes you down to the home below",
        east:"",
        south:"",
        west:""
    };

    const reponse_arr_right={
        north:"Your Standing in an attic staring at a wardrobe\
        You see some room to the left and a desk against the wall to the right\
        Behind you is the ladder that takes you down to the home below",
        east:"",
        south:"",
        west:""
    };

    
    


    if(action==="start"){
        if(item==="game" && player.first_time===true){
            return_state = {
                player_diser_description:player.player_description,
                palyer_invintory: player.palyer_invintory,
                palyer_stats: player.palyer_stats,
                scene:{
                    display_text:response_arr_center.north
                },
                level:player.level,
                levels:player.levels,
                first_time:false,
                direction:player.direction,
                position:player.position,
                error:err_msg
            }
            position_ct=0;
            return return_state;
        }
        else{
            err_msg=`.....Sorry The Game Has Already Started....`
            return_state = {
                player_diser_description:player.player_description,
                palyer_invintory: player.palyer_invintory,
                palyer_stats: player.palyer_stats,
                scene:player.scene,
                level:player.level,
                levels:player.levels,
                first_time:false,
                direction:player.direction,
                position:player.position,
                error:err_msg
            }
            return return_state;
        }
    }
    else{
        if(player.position==="1c"){
            console.log(player.direction)
            if(player.direction === compass[0]){
                if(action==="turn"){
                    if(item==="left"){
                        if(position_ct>0){
                            position_ct = response_arr_center.length;
                        }
                        else if(position_ct>response_arr_center.length){
                            position_ct=0;
                        }
                        return_state = {
                            player_diser_description:player.player_description,
                            palyer_invintory: player.palyer_invintory,
                            palyer_stats: player.palyer_stats,
                            scene:{
                                display_text:Object.values(response_arr_center[position_ct])
                            },
                            level:player.level,
                            levels:player.levels,
                            first_time:player.first_time,
                            direction:compass[position_ct],
                            position:player.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else if(item==="right"){
                        return_state = {
                            player_diser_description:player.player_description,
                            palyer_invintory: player.palyer_invintory,
                            palyer_stats: player.palyer_stats,
                            scene:player.scene,
                            level:player.level,
                            levels:player.levels,
                            first_time:player.first_time,
                            direction:compass[player.direction+1],
                            position:player.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else{
                        console.log("RANDOM STARTING")
                        err_msg=Random();
                        return_state = {
                            player_diser_description:player.player_description,
                            palyer_invintory: player.palyer_invintory,
                            palyer_stats: player.palyer_stats,
                            scene:player.scene,
                            level:player.level,
                            levels:player.levels,
                            first_time:player.first_time,
                            direction:player.direction,
                            position:player.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                }
                else{
                    console.log("FAILED")
                }
            }
            else if(player.direction ===compass[1]){
                if(action==="turn"){
                    
                }
            }
            else if(player.direction ===compass[2]){
                if(action==="turn"){
                    
                }
            }
            else if(player.direction ===compass[3]){
                if(action==="turn"){
                    
                }
            }
            else{
                console.log("DIrection failed")
            }
            
        }

    return(
        return_state
    )

    }
}
