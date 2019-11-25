import React, { Component} from "react";


export default function(item,action,direction, object){
    let return_state;
    if(action==="start"){
        if(item==="game" && object.first_time===true){
            return_state = {
                player_diser_description:object.player_description,
                palyer_invintory: object.palyer_invintory,
                palyer_stats: object.palyer_stats,
                scene:{display_text:"GAME START TEST"},
                level:object.level,
                levels:object.levels,
                first_time:false
            }
            return return_state;
        }
        else{
            return_state = {
                player_diser_description:object.player_description,
                palyer_invintory: object.palyer_invintory,
                palyer_stats: object.palyer_stats,
                scene:{display_text:object.scene.display_text},
                level:object.level,
                levels:object.levels,
                first_time:false
            }
            return alert("Sorry But You've Already Started Your Game!")
        }
    }
    else if(object.position ==='center'){
   
    
    }
    

    
    return(
        return_state
    )

}


