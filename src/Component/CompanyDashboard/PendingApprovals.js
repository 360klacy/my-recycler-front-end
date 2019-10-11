import React, {Component} from 'react';
import './../../App.css';



class PendingApprovals extends Component{
    
render() {
    const filterTicket = this.props.tickets.filter((ticket)=>{
        return ticket.progress === 2
    })
    console.log('filterTickets',filterTicket)
    return (<>
        <div className="table-container">
            {filterTicket.map((ticket)=>{ 
                return (
                <div onClick={this.props.clickFunc} className="company-ticket-table" key={ticket.id}>
                    <div className="company-ticket-table-header border-bottom border-right"> Customer Name: {ticket.name} </div>
                    <div className="company-ticket-table-id border-bottom">Order: {ticket.id}</div>
                    <div className="company-ticket-table-user-pref border-right border-bottom">Address: {ticket.pickup_address} {ticket.pickup_address2}</div>
                    <div className="company-ticket-table-user-pref border-bottom">Time: {Object.entries(JSON.parse(ticket.customer_prefer_timeframe))}</div>
                    <div className="company-ticket-table-details-btn" onClick={this.props.clickFunc} id={ticket.id}>Click to give Quote!</div>
                </div>
            )})}
        </div>
        <div className="app-container">

        </div>
        {/* <h1>hellllllllloooooo pending quotes?</h1> */}
 </>)
}
}

export default PendingApprovals