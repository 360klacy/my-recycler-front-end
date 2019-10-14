import React from 'react';

function ScheduledTicket(props){
    return(
        <div className="company-ticket-table" key={props.ticket.id}>
        <div className="company-ticket-table-header border-bottom border-right"> Customer Name: {props.ticket.name} </div>
        <div className="company-ticket-table-id border-bottom">Order #: {props.ticket.id}</div>
        <div className="company-ticket-table-user-pref border-right border-bottom">
            <div className="status-row">Status: <div className="text-green">Scheduled</div></div>                        
        </div>
        <div className="company-ticket-table-user-pref border-bottom">
            <div>Address: {props.ticket.pickup_address} {props.ticket.pickup_address2}</div>
            <div>Date: {props.ticket.pickup_date}</div>
            <div>Time: {props.ticket.pickup_time}</div>
        </div>
        <div className="company-ticket-table-details-btn" id={props.ticket.id}>Complete</div>
    </div>
    )
}

export default ScheduledTicket