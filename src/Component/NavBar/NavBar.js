import React, { Component } from 'react'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import ModalDefault from '../Auth/ModalDefault'
import { Link } from 'react-router-dom'
import './NavBar.css'
import HomeNav from './HomeNav'
import CompanyNav from './CompanyNav'
import UserNav from './UserNav'

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
    signup=()=>{
         this.setState({
           showModal: true
         })
       }
       closeModal=()=>{
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

           if(!this.props.userInfo.authToken){
            navBarLinks =
            <HomeNav signup={this.signup}/>   
           } else if ((this.props.userInfo.authToken) && (this.props.userInfo.isCompany)) {
            navBarLinks =  
            <CompanyNav logout={this.props.logout}/>
           } else {
            navBarLinks =  
             <UserNav logout={this.props.logout}/>
           }
           console.log('+++++',navBarLinks )
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
        return(<>

<div className="mobile-container">
  <div className="mobile-content">
  <div className="topnav">
    <div className="logo">
          <img className="logo-img" src="./012-van.png" alt="logo" />
          <p>R-Waste</p>
    </div>

    <div className="icon" onClick={this.displayMobile}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div>
  </div>
  </div>

    <div id="myLinks">
      {navLinks}
    </div>
    
</div>
        
                <nav className="nav-container">
                    <div className="logo">
                        <img className="logo-img" src="./012-van.png" alt="logo" />
                        <p>R-Waste</p>
                    </div>
                    <div className="nav">
                        {navLinks}
                    </div>
                </nav>

{/* LOGIN AND SIGN-UP PROCESS */}
            <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
              <button id="close-modal" onClick={this.closeModal}>x</button>

                {this.state.modalContent}
    
            </div>



        </>)
    }
}

export default NavBar