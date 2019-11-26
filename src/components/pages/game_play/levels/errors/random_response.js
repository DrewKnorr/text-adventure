import React, { Component} from "react";


export default function(){
    console.log("RADNOM RUNNING")

    const random_response=[
        "test 1",
        "test 2",
        "test 3",
        "test 4",
        "test 5"
    ]

    const random = random_response[Math.floor(Math.random(random_response.length))]

    return random;

}