import React, { Component} from "react";
import {NavLink } from "react-router-dom";


export default class NavBar extends Component{
    render(){
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link">Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/num-btn" activeClassName="nav-link">High Score</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/num-btn" activeClassName="nav-link">About U</NavLink>
                </div>
                
            </div>
        )
    }
}