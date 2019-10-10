import React, { Component } from 'react'
import './../../App.css'


class PendingQuotes extends Component {

   

    render() {
        console.log(this.props.tickets)
        return (<>
            {/* <div className="table-container">
                {this.props.tickets.map((ticket)=>{ 
                    return <div class="divTableCell">Customer Name: {ticket.name} 
                    <div class="divTableCell">Order: {ticket.id}</div>
                    <div class="divTableCell">Address: {ticket.address}</div>
                    <div class="divTableCell">Product: {ticket.order_items}</div>
                </div>
                })}
            </div>
            <div className="app-container"> */}
            <h1>Yall good?</h1>
            {/* </div> */}
     </>)
    }
}

export default PendingQuotes