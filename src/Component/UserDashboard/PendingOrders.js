import React, {Component} from 'react';
import './../../App.css';
import PendingConfirmation from './ticketStructure/PendingConfirmation'


class PendingOrders extends Component{
    render(){
        let filteredList = this.props.tickets.filter((ticket)=>{
            return ticket.progress == 2
        })
        return(<>
            <div className="user-order">
                {this.state.tickets}
            </div>
        </>)
    }
}

export default PendingOrders;