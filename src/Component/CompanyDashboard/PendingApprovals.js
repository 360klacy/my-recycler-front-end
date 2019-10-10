import React, {Component} from 'react';
import './../../App.css';



class PendingApprovals extends Component{
    
render() {
    console.log(this.props.tickets)
        const filterTicket = this.props.tickets.filter((ticket)=>{
            return ticket.progress === 1
        })
    return (<>
        <div className="table-container">
            {filterTicket.map((ticket)=>{ 
                return <div class="divTableCell">Customer Name: {ticket.name} 
                <div class="divTableCell">Order: {ticket.id}</div>
                <div class="divTableCell">Address: {ticket.address}</div>
                <input class="divTableCell"></input>Quote:
            </div>
            })}
        </div>
        <div className="app-container">

        </div>
        {/* <h1>hellllllllloooooo pending quotes?</h1> */}
 </>)
}
}

export default PendingApprovals