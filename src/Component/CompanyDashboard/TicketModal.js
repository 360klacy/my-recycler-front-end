import React from 'react';
import '../../App.css'

class TicketModal extends React.Component{
    constructor(){
        super();
        this.state = {
            modalData: ""
        }
    }
    componentDidMount(){
        this.setState({
            modalData: this.props.ticketData
        })
    }
    render(){
        console.log('ticketdata',this.state)
        if(this.state.modalData === "loading"){
            return <div className="ticket-modal">Loading...</div>
        }
        return(
            <div className="ticket-modal">{this.state.modalData}</div>
        )
    }
}

export default TicketModal