import React, { Component } from 'react'
import './../../App.css'


class PendingQuotes extends Component {

   

    render() {
        console.log(this.props.tickets)
        const filterTicket = this.props.tickets.filter((ticket)=>{
           return ticket.progress === 0
        })
        return (<>
            <div className="table-container">
                {filterTicket.map((ticket)=>{ 
                    return <div class="divTableCell">Customer Name: {ticket.name} 
                    <div class="divTableCell">Order: {ticket.id}</div>
                    <div class="divTableCell">Address: {ticket.address}</div>
                    <div class="divTableCell">Product: {ticket.order_items}</div>
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