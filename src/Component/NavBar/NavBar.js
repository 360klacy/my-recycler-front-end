import React, { Component } from 'react'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import ModalDefault from '../Auth/ModalDefault'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            showModal : false,
            modalContent: null, 
        }
    }

    componentDidMount(){
        this.setState({
            modalContent: <ModalDefault changeModalContent={this.changeModalContent}/>
        })
    }
    signup=(e)=>{
         this.setState({
           showModal: true
         })
       }
       closeModal=()=>{
        //  document.querySelector('body').className = ''
         this.setState({
           showModal: false,
           modalContent: <ModalDefault changeModalContent={this.changeModalContent}/>
         })
       }
       changeModalContent = (newContent)=>{
        //  console.log(newContent)
         let modalContent = <ModalDefault changeModalContent={this.changeModalContent}/>
         if (newContent === 'login'){
           modalContent = <Login setToken={this.props.setToken}  changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
         } else if(newContent === 'signup'){
           modalContent = <Signup setToken={this.props.setToken} changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
         }
         this.setState({
           modalContent
         })
       }
       buildNavLinks = ()=>{
           let navBarLinks = ""

           if(!this.props.authToken){
            navBarLinks = <>
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Our Story</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
                <div className="btn-container">
                    <button className="btn-border" onClick={this.signup}>Login</button>
                    <button className="btn" onClick={this.signup}>Create Account</button>
                </div>
            </> 
           } else {
            navBarLinks =  
            <>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Our Story</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/userdashboard">Dashboard</Link></li>
            </ul>
            </>
           }
           return navBarLinks
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
        const navLinks = this.buildNavLinks()
        console.log(navLinks)
        return(<>

<div className="mobile-container">

<div className="topnav">
  <div className="logo">
        <img className="logo-img" src="./012-van.png" alt="logo" />
        <p>MyRycycler</p>
    </div>
  <div id="myLinks">
    {/* <a href="/">Home</a>
    <a href="/">Our Story</a>
    <a href="/">Blog</a>

    <a href="/">Contact Us</a> */}
    {navLinks}
    <button className="mobile-btn" onClick={()=>{}}  >Log in</button>
    
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

                        {/* <ul className="links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Our Story</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact Us</a></li> */}
                            {/* <div className="btn-container"
                                <button className="btn-border"><a href="/">Log in</a></button>
                                {/* <button className="btn"><a href="/">Create Account</a></button> */}
                            {/* </div> */}
                        {/* </ul> */}

                        {navLinks}

                    </div>
                </nav>
            </div>

            <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
              <button id="close-modal" onClick={this.closeModal}>x</button>
              <div className="modal-content">
                {this.state.modalContent}
              </div>
            </div>



        </>)
    }
}

export default NavBar