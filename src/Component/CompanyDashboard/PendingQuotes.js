import React, {Component} from 'react';
import './../../App.css';
import NeedsQuote from './ticketStructures/NeedsQuote'



class PendingQuotes extends Component{
    
render() {
    const filterTicket = this.props.tickets.filter((ticket)=>{
        return ticket.progress === 1
    })
    console.log('filterTickets',filterTicket)
    return (<>
        <div className="table-container">
            {filterTicket.map((ticket)=>{
                return <NeedsQuote ticket={ticket} pending={this.props.pending} clickFunc={this.props.clickFunc}/>
            })}
        </div>
 </>)
}
}

export default PendingQuotes