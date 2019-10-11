import React, { Component } from 'react'
import { tsPropertySignature } from '@babel/types';
import '../../App.css'


// Create Company NavBar for Company Dashboard


function CompanyNavBar(props){
    console.log('props',props)
    return (
                <div className="company-nav">
                    <div className={props.displayId === 0 ? `active`:``} onClick={()=>{props.changeDashboardContent()}}>Current Orders</div>
                    <div className={props.displayId === 1 ? `active`:``} onClick={()=>{props.changeDashboardContent('pending-approvals')}}>Pending Orders</div>
                    <div className={props.displayId === 2 ? `active`:``} onClick={()=>{props.changeDashboardContent('scheduled-approvals')}}>Scheduled</div>
                </div> 
    )
}


export default CompanyNavBar