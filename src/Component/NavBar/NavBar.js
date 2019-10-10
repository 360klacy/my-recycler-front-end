import React, { Component } from 'react'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import ModalSplash from '../Auth/modalSplash'
// import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            showAuthModal : false,
            authModalStatus: <Login/>
        }
    }

    componentDidMount(){
        this.setState({
            authModalStatus: <ModalSplash changeModalContent={this.changeModalContent}/>
        })
    }
    signup=(e)=>{
        document.querySelector('body').className = 'body-modal-show'
         this.setState({
           showAuthModal: true
         })
       }
       closeModal=()=>{
         document.querySelector('body').className = ''
         this.setState({
           showAuthModal: false,
           authModalStatus: <ModalSplash changeModalContent={this.changeModalContent}/>
         })
       }
       changeModalContent = (newContent)=>{
         console.log(newContent)
         let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
         if (newContent === 'login'){
           modalContent = <Login  changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
         } else if(newContent === 'signup'){
           modalContent = <Signup changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
         }
         this.setState({
           modalContent
         })
       }
    showAuthModal = ()=> {
        //do auth
    }

    displayMobile = () => {
      const hamburgerBar = document.getElementById("myLinks");
      if (hamburgerBar.style.display === "block") {
        hamburgerBar.style.display = "none";
      } else {
        hamburgerBar.style.display = "block";
      }
    }

    render (){
        return(<>

<div className="mobile-container">

<div className="topnav">
  <div className="logo">
        <img className="logo-img" src="./012-van.png" alt="logo" />
        <p>MyRycycler</p>
    </div>
  <div id="myLinks">
    <a href="/">Home</a>
    <a href="/">Our Story</a>
    <a href="/">Blog</a>
    <a href="/">Contact Us</a>
    <button className="mobile-btn"><a href="/">Log in</a></button>
    
  </div>
  <div className="icon" onClick={this.displayMobile}>
    <div className="hamburger"></div>
    <div className="hamburger"></div>
    <div className="hamburger"></div>
  </div>
</div>

</div>
        
            <div className="container">
                <nav className="nav-container">
                    <div className="logo">
                        <img className="logo-img" src="./012-van.png" alt="logo" />
                        <p>MyRycycler</p>
                    </div>
                    <div className="nav">
                        <ul className="links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Our Story</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact Us</a></li>
                            {/* <div className="btn-container"> */}
                                <button className="btn-border"><a href="/">Log in</a></button>
                                {/* <button className="btn"><a href="/">Create Account</a></button> */}
                            {/* </div> */}
                        </ul>


                    </div>
                </nav>
            </div>
        </>)
    }
}

export default NavBar