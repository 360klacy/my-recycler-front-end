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
                        <p>
                        R-Waste was developed and founded in Atlanta, GA by four young engineers in the south’s largest tech hub, Atlanta Tech Village. The idea started off as
                        a class project but soon became OUR way of saving the earth. Many of us would like to recycle more often but questions like where, what, and how holds us back from doing so.
                        Have no fear, R-Waste is here! Simply sign up, choose your desired recyclables, pick up time, and there you have it, you just saved the world!
                        All superheroes don’t wear capes but with R-Waste you can save OUR world!
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