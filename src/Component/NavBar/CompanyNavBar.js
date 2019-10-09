import React, { Component } from 'react'
import { tsPropertySignature } from '@babel/types';


// Create Company NavBar for Company Dashboard


function CompanyNavBar(props){
    return (<>
        <nav className="nav-container">
            <div className="logo">
                <a href="/"><img className="logo-img" src="./012-van.png" alt="logo" /></a>
            </div>
            <div className="nav">
                <ul className="links">
                    <li>Current Orders</li>
                    <li><button onClick={()=>{props.changeDashboardContent('pending-approvals')}}>Pending Orders</button></li>
                    <li>Settings</li>
                </ul>

                <div className="btn-container">
                <button className="btn-border">Logout</button>
                </div>
            </div>
        </nav>
    </>)
}


export default CompanyNavBar