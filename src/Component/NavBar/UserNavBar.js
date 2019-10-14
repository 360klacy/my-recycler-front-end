import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


function UserNavBar(){
    return (<>
        <nav className="nav-container">
            <div className="logo">
                <Link to="/"><img className="logo-img" src="./012-van.png" alt="logo" /></Link>
            </div>
            <div className="nav">
                <ul className="links">
                    <li><a href="/">View Status</a></li>
                    <li><a href="/">Past history</a></li>
                    <li><a href="/">Settings</a></li>
                </ul>

                <div className="btn-container">
                <button className="btn-border"><a href="/">Logout</a></button>
                </div>
            </div>
        </nav>
    </>)
}


export default UserNavBar