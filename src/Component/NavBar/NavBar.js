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

    render (){
        return(<>
            <div className="container">
                <nav className="nav-container">
                    <div className="logo">
                        <img className="logo-img" src="./012-van.png" alt="logo" />
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