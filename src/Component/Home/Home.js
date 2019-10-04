import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './Home.css'

class Home extends Component {

    render (){
        return(<>
        {<NavBar/>}
            <div className="main-container">
                <div className="main">
                    <div className="left">
                        <h2>Got Waste? We'll pick it up!</h2>
                        <h1 className="title">Saving the Planet <br />
                        One Day at a Time</h1>

                         <div className="info">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex eadolor sit amet, exercitation ullamco laboris nisi 
                            ut aliquip ex eadolor sit amet.
                        </p>
                        <a href="/">Learn more &rarr;</a>
                         </div>

                    </div>

                    <div className="img-right">
                        <img src="./recycle-truck.png" alt="recycle-truck" />
                    </div>

                </div>
            </div>

            <footer className="footer"> 
            Copyright &copy; 2019 MyRecycler All Rights Reserved.

            </footer>
        </>)
    }

}


export default Home