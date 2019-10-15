import React, {Component} from 'react';
import './../../App.css';
import PendingConfirmation from './ticketStructure/PendingConfirmation'


class PendingOrders extends Component{
    render(){
        let filteredList = this.props.tickets.filter((ticket)=>{
            return ticket.progress == 2
        })
        return(<>
            <div className="table-container">
                {filteredList.map((ticket)=>{return <PendingConfirmation adFn={this.props.adFn} ticket={ticket}/>})}
            </div>
        </>)
    }
}

export default PendingOrders;