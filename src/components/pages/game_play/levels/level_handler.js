import React, { Component} from "react";
import FirstLevel from "./first_level/abandoned_house";

export default function(item,action,directon, object){
    
    let return_state;
    if (object.level===0){
        return_state = FirstLevel(item,action,directon,object);
    }
    
    return(
        return_state
    )

}


