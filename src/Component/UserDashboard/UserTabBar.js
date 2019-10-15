import React, {Component} from 'react';
import '../../App.css';
import AddOrder from './AddOrder'



function UserTabBar(props){
    console.log('props',props)
    return (<>
             <div className="user-nav">
                    <div id="tabs" className={props.displayId === 0 ? `active`:``} onClick={()=>{props.changeDashboardContent()}}>Add Order</div>
                    <div id="tabs" className={props.displayId === 1 ? `active`:``} onClick={()=>{props.changeDashboardContent('pending-approvals')}}>Pending Orders</div>
                    <div id="tabs" className={props.displayId === 2 ? `active`:``} onClick={()=>{props.changeDashboardContent('scheduled-approvals')}}>History</div>
            </div> 
   </> )
}

export default UserTabBar;