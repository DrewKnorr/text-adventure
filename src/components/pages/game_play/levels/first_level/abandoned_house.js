import React, { Component} from "react";


export default function(item,action,directon, object){
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
                scene:{display_text:` ... Sorry but You've Already Started!......\n${object.scene.display_text}\n`},
                level:object.level,
                levels:object.levels,
                first_time:false
            }
            return return_state;
        }
    }else if(action=="touch"){

    }
    else if(action==="shake"){

    }
    else if(action==="open"){
        if(item==="hatch"){
            return_state = {
                player_diser_description:object.player_description,
                palyer_invintory: object.palyer_invintory,
                palyer_stats: object.palyer_stats,
                scene:{display_text:`You Move Down The Ladder To the Second Floor`},
                level:1,
                levels:object.levels,
                first_time:false
            }
            return return_state;
        }

    }
    else if(action==="attack"){

    }
    else if(action==="speak"){

    }
    else if(action==="run"){

    }
    else if(action==="walk"){

    }

    
    return(
        return_state
    )

}


