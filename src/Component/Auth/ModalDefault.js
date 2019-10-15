import React from 'react';
import { Link } from 'react-router-dom'
import "./../../App.css"

function ModalDefault(props){
  return(<>
          <div className="modal">
            <div className="logo">
              <img className="logo-img" src="./012-van.png" alt="logo" />
              <p className="light-color">R-Waste</p>
            </div>
                
            <div className="container">
                <div className="details">
                    <h2 className="light-color">Please log into your account or sign up.</h2>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                {/* <button className="exit-btn" onClick={this.props.closeModal}>X</button> */}
                <div className="btn-container">
                  <button onClick={()=>{props.changeModalContent('signup')}} className="action-btn">Sign up with email</button>
                  <button onClick={()=>{props.changeModalContent('login')}} className="btn btn-1">Log in</button>
                  </div>
                </div>
            </div>
                </div>



  </>)
}
export default ModalDefault;