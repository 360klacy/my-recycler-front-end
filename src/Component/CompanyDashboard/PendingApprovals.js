import React, {Component} from 'react';
import './../../App.css';



class PendingApprovals extends Component{
    
render() {
    console.log(this.props.tickets)
        const filterTicket = this.props.tickets.filter((ticket)=>{
            return ticket.progress === 2
        })
    return (<>
        <div className="table-container">
            {filterTicket.map((ticket)=>{ 
                return (
                <div onClick={this.props.clickFunc} class="company-ticket-table" id={ticket.id}>
                    <div className="company-ticket-table-header border-bottom"> Customer Name: {ticket.name} </div>
                    <div className="company-ticket-table-id border-bottom">Order: {ticket.id}</div>
                    <div className="company-ticket-table-user-pref border-right border-bottom">Address: {ticket.address} {ticket.address2}</div>
                    <div className="company-ticket-table-user-pref border-bottom">Time: {ticket.customer_prefer_timeframe}</div>
                    <div className="company-ticket-table-details-btn" onClick={this.props.clickFunc}>Click for details</div>
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