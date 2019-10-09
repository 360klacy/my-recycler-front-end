import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Item from './../Item/Item'
import './../../App.css'
import UserNavBar from '../NavBar/UserNavBar'




class UserDashboard extends Component {
    render(){
        return(<>
            <div className="container">
                <UserNavBar />

            <section className="top">
                <div className="container">
                    <h5>Dashboard —</h5>

                        <div className="title">
                            <h1>Hello User!</h1>
                        </div>
                </div>
            </section> 
            </div>

            <Item />
       </> )
       
    }
}


export default UserDashboard