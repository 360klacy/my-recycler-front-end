import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {


    render (){
        return(<>
            <div className="container">
                <nav className="nav-container">
                    <div class="logo">
                        <a href="/"><img className="logo-img" src="./012-van.png" alt="logo" /></a>
                    </div>
                    <div className="nav">
                        <ul className="links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Our Story</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>

                        <div className="btn-container">
                            <button className="btn-border"><a href="/">Login</a></button>
                            <button className="btn"><a href="/">Create Account</a></button>
                        </div>

                    </div>
                </nav>
            </div>
        </>)
    }
}

export default NavBar