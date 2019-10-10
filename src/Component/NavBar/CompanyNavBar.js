import React, { Component } from 'react'
import { tsPropertySignature } from '@babel/types';


// Create Company NavBar for Company Dashboard


function CompanyNavBar(props){
    return (<>
        <nav className="nav1-container">
            
            <div className="nav">
                <ul className="links">
                    <li><button onClick={()=>{props.changeDashboardContent()}}>Current Orders</button></li>
                    <li><button onClick={()=>{props.changeDashboardContent('pending-approvals')}}>Pending Orders</button></li>
                    <li><button onClick={()=>{props.changeDashboardContent('scheduled-approvals')}}>Scheduled</button></li>
                </ul>

                
            </div>
        </nav>
    </>)
}


export default CompanyNavBar