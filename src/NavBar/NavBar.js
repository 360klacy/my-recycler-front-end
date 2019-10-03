import React, {Component} from 'react';
import './NavBar.css';
import Login from './Login';
import SignUp from './SignUp';


class NavBar extends Components{
    buildNavLinks = ()=>{
        let navLinks = "";
        if(!this.props.auth.token){
            navLinks =
            <ul id="nav-mobile" className="right">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/sign/up">Sign Up</Link></li>
            </ul>
        }else{
            navLinks =
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/sign/up">Sign Up</Link></li>
                </ul>
        }
    return navLinks
    }
}