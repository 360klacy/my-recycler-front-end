import React from 'react';

function NeedsQuote(props){
    let isPending = props.pending[props.ticket.id] === true;
    let { time, date } = JSON.parse(props.ticket.customer_prefer_timeframe)
    let btnClass = isPending ? "ticket-table-details-btn pending" : "ticket-table-details-btn"
    let btnText = isPending?"Pending...":"Click to give Quote!"
    let overlayClass = isPending?"ticket-table-overlay": "";
    let btnEvent =isPending ? null :props.clickFunc
    return (
    <div className="ticket-table" key={props.ticket.id}>
        <div className={overlayClass}></div>
        <div className="ticket-table-header border-bottom border-right"> Customer Name: {props.ticket.name} </div>
        <div className="ticket-table-id border-bottom">Order #: {props.ticket.id}</div>
        <div className="ticket-table-user-pref border-right border-bottom">
            <div className="status-row">Status:<div className="text-red">Needs Quote</div></div>                        
        </div>
        <div className="ticket-table-user-pref border-bottom">
            <div>Address: {props.ticket.pickup_address} {props.ticket.pickup_address2}</div>
            <div>Date: {date}</div>
            <div>Time: {time}</div>
        </div>
        <div className={btnClass} onClick={btnEvent} id={props.ticket.id}>{btnText}</div>
    </div>
    )
}

export default NeedsQuote