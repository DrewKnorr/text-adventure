import React, { Component} from "react";


export default function(item,action,directon, object){
    let err_msg="";
    let return_text="";
    let return_state;

    const response_arr_turn_center =[
        "You see the floor lead to the other side of the attic, on the other side you see storage box's and \
        a chest. The moon light shines though a skylight iluminating the hatch that leads to the home below.\
        The attic is cramped and stuffy, you're not able to move much.....",
        "You see the the tach of the roof and boxs.... not much here to look at....",
        "You see an old desk agaisnt the wall, papers and books scattered across the top.\
        You see a few drawers, one of which has a lock.... the lock seems old.\
        The candle on the desk is lit and flickering\
        ",
        "You see a dusty wardrobe infront of you, a coat hanger to the left of the wardrobe.\
        The Wood on the wardrobe has defently seen better days\
        "
    ]
    if(action==="start"){
        if(item==="game" && object.first_time===true){
            return_state = {
                player_diser_description:object.player_description,
                palyer_invintory: object.palyer_invintory,
                palyer_stats: object.palyer_stats,
                scene:{
                    display_text:"You see a dusty wardrobe infront of you, a coat hanger to the left of the wardrobe.\
                The Wood on the wardrobe has defently seen better days\
                "},
                level:object.level,
                levels:object.levels,
                first_time:false,
                direction:object.direction,
                position:object.position,
                error:err_msg
            }
            return return_state;
        }
        else{
            err_msg=`.....Sorry The Game Has Already Started....`
            return_state = {
                player_diser_description:object.player_description,
                palyer_invintory: object.palyer_invintory,
                palyer_stats: object.palyer_stats,
                scene:object.scene,
                level:object.level,
                levels:object.levels,
                first_time:false,
                direction:object.direction,
                position:object.position,
                error:err_msg
            }
            return return_state;
        }
    }
    else{
        if(object.position==="1c"){
            if(action==="turn"){
                if (item==="left"){
                    if(object.direction==="forward"){
                        return_text = response_arr_turn_center[0];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"left",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else if(object.direction==="left"){
                        return_text = response_arr_turn_center[1];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"backward",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else if(object.direction==="backward"){
                        return_text = response_arr_turn_center[2];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"right",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else if(object.direction==="right"){
                        return_text = response_arr_turn_center[3];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"forward",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                }
                else if(item==="right"){
                    if(object.direction==="forward"){
                        return_text = response_arr_turn_center[2];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"right",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else if(object.direction==="left"){
                        return_text = response_arr_turn_center[3];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"forward",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else if(object.direction==="backward"){
                        return_text = response_arr_turn_center[0];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"left",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                    else if(object.direction==="right"){
                        return_text = response_arr_turn_center[1];
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:false,
                            direction:"backward",
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;
                    }
                }
            }
            else if(action==="move" || action==="walk" || action==="run"){
                if(object.direction==="forward"){
                    if(item === "forward"){
                        err_msg ="Wow you ran into the wardrobe..... bet that hurt ....."
                        return_state = {
                            player_diser_description:object.player_description,
                            palyer_invintory: object.palyer_invintory,
                            palyer_stats: object.palyer_stats,
                            scene:{display_text:return_text},
                            level:object.level,
                            levels:object.levels,
                            first_time:object.first_time,
                            direction:object.direction,
                            position:object.position,
                            error:err_msg
                        }
                        return return_state;e
                    }
                }
            }
        }

    }

    return(
        return_state
    )

}


