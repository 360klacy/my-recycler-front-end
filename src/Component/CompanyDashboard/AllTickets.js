import React, { Component } from 'react'
import './../../App.css'
import NeedsQuote from './ticketStructures/NeedsQuote'
import PendingConfirmation from './ticketStructures/PendingConfirmation';
import ScheduledTickets from './ticketStructures/ScheduledTickets'


class AllTickets extends Component {

   

    render() {
        console.log(this.props.tickets)
        const filterTicket = this.props.tickets
        return (<>
            <div className="table-container">
            {filterTicket.map((ticket)=>{
                switch(ticket.progress){
                    case 1:
                        return <NeedsQuote ticket={ticket} pending={this.props.pending} clickFunc={this.props.clickFunc}/>
                    case 2:
                        return <PendingConfirmation ticket={ticket}/>
                    default:
                        return <ScheduledTickets ticket={ticket}/>
                }
            }
                
            )}
            </div>
            <div className="app-container">
            {/* <h1>Yall good home company page</h1> */}
            </div>
     </>)
    }
}

export default AllTickets