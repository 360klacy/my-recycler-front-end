import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Login from '../Auth/Login'
import SignUp from '../Auth/Signup'

class Home extends Component {
    
    render (){
        return(<>
        <div className="hero-bkg">
            <div className="main-container">
                <div className="main">
                    <div className="intro">
                        <h2>Got Waste? We'll pick it up!</h2>
                        <div className="spacer"></div>
                        <h1 className="title">Like Uber for your Recyclables</h1>
                        <div className="spacer"></div>
                        <div>
                            <button className="btn btn-2"><a href="/">Get Started</a></button>
                        </div>   
                    </div>
                </div>
                        {/* <img className="hero-img" src="./recycle-truck.png" alt="recycle-truck" /> */}
            </div>

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
            Copyright &copy; 2019 MyRecycler All Rights Reserved.
            </footer>
        </>)
    }

}


export default Home