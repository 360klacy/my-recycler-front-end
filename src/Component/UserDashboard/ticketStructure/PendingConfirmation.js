import React from 'react';

function PendingConfirmation(props){
    return (
    <div className="ticket-table" key={props.ticket.id}>
        <div className="ticket-table-header border-bottom border-right"> Customer Name: {props.ticket.name} </div>
        <div className="ticket-table-id border-bottom">Order #: {props.ticket.ticket_id}</div>
        <div className="ticket-table-user-pref border-right">
            <div className="status-row">Status: <div className="text-orange">Pending Confirmation</div></div>                        
            <div className="status-row">Price: <div className="text-orange">{props.ticket.price}</div></div>                        
        </div>
        <div className="ticket-table-user-pref">
            <div>Address: {props.ticket.pickup_address} {props.ticket.pickup_address2}</div>
            <div>Date: {props.ticket.pickup_date}</div>
            <div>Time: {props.ticket.pickup_time}</div>
        </div>
        <div className="ticket-table-details-bottom-cont" id={props.ticket.ticket_id}>
            <div onClick={props.adFn} id={props.ticket.ticket_id} value='accept' className="ticket-table-confirm-btn bg-color-green">Accept</div>
            <div onClick={props.adFn} id={props.ticket.ticket_id} value='decline' className="ticket-table-confirm-btn bg-color-red">Decline</div>
        </div>
    </div>
    )
}

export default PendingConfirmation