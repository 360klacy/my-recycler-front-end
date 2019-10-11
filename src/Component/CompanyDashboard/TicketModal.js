import React from 'react';
import '../../App.css'

class TicketModal extends React.Component{
    constructor(){
        super();
        this.state = {
            modalData:[0]
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps)
        if(prevProps.ticketData !== this.state.modalData){
            this.setState({
                modalData: prevProps.ticketData
            })
        }
    }
    render(){
        console.log('ticketdata',this.state)
        if(this.state.modalData === "loading"){
            return <div className="ticket-modal">Loading...</div>
        }
        return(
            <div className="ticket-modal">
                <input>
                </input>
                <input>
                </input>
                <input>
                </input>
            </div>
        )
    }
}

export default TicketModal