import React, { Component } from 'react'
import './../../App.css'
import CompanyNavBar from '../NavBar/CompanyNavBar'
// import Order from './Order'



class CompanyDashboard extends Component {
    render(){
        return(<>
            <div className="container">
                <CompanyNavBar />

            <section className="top">
                <div className="container">
                    <h5>Dashboard —</h5>

                        <div className="title">
                            <h1>Hello User!</h1>
                        </div>
                </div>
            </section> 

            <div className="current-orders">
                <div className="container">
                    <h2>Current Orders</h2>
                    {/* <Order /> */}
                </div>
            </div>
            </div>
       </> )
    }
}


export default CompanyDashboard