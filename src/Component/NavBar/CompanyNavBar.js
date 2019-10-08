import React, { Component } from 'react'
import './NavBar.css'




function CompanyNavBar(){
    return (<>
        <nav className="nav-container">
            <div className="logo">
                <img className="logo-img" src="./012-van.png" alt="logo" />
            </div>
            <div className="nav">
                <ul className="links">
                    <li><a href="/">Current Orders</a></li>
                    <li><a href="/">Order History</a></li>
                    <li><a href="/">Settings</a></li>
                </ul>

                <div className="btn-container">
                <button className="btn-border"><a href="/">Logout</a></button>
                </div>
            </div>
        </nav>
    </>)
}


export default CompanyNavBar