import React, { Component } from 'react'
import './../../App.css'


class PendingQuotes extends Component {

   

    render() {
        console.log(this.props.tickets)
        const filterTicket = this.props.tickets.filter((ticket)=>{
            return ticket.progress === 1

        })
        return (<>
            <div className="table-container">
                {filterTicket.map((ticket)=>{ 
                    return <div class="divTable">Customer Name: {ticket.name} 
                    <div className="divTableCell">Order: {ticket.id}</div>
                    <div className="divTableCell">Address: {ticket.address}</div>
                    <div className="divTableCell">Product: {ticket.order_items}</div>
                </div>
                })}
            </div>
            <div className="app-container">
            {/* <h1>Yall good home company page</h1> */}
            </div>
     </>)
    }
}

export default PendingQuotes