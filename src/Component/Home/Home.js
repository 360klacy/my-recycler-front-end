import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Login from '../Auth/Login'
import SignUp from '../Auth/Signup'

class Home extends Component {
    
    render (){
        return(<>
            <div className="main-container">
                <div className="main">
                    <div className="intro">
                        <h2>Got Waste? We'll pick it up!</h2>
                        <div className="spacer"></div>
                        <h1 className="light">Like Uber for your Recyclables</h1>
                        <div className="spacer"></div>
                        <div><button className="btn btn-2"><Link to="/">Get Started</Link></button></div>   
                    </div>
                </div>
            </div>

            <div className="hero-bkg">
        </div>

                 

            <section className="our-story-section">
                <div className="our-story-details">
                        <h1 className="title">Our Story</h1>
                        <div className="spacer"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex eadolor sit amet, exercitation ullamco laboris nisi 
                            ut aliquip ex eadolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex eadolor sit amet, exercitation ullamco laboris nisi 
                            ut aliquip ex eadolor sit amet.
                        </p>
                        <div className="spacer"></div>
                        <Link to="/">Learn more &rarr; </Link>
                </div>
            </section>

                <Categories />

            <footer className="footer"> 
            Copyright &copy; 2019 R-Waste All Rights Reserved.
            </footer>
        </>)
    }

}


export default Home