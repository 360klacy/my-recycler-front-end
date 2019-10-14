import React, {Component} from 'react';
import '../../App.css';



function UserTabBar(props){
    console.log('props',props)
    return (
                <div className="user-nav">
                    <div className={props.displayId === 0 ? `active`:``} onClick={()=>{props.changeDashboardContent()}}>Current Orders</div>
                    <div className={props.displayId === 1 ? `active`:``} onClick={()=>{props.changeDashboardContent('pending-approvals')}}>Pending Orders</div>
                    <div className={props.displayId === 2 ? `active`:``} onClick={()=>{props.changeDashboardContent('scheduled-approvals')}}>History</div>
                </div> 
    )
}

export default UserTabBar;