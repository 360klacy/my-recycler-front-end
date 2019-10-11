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
    handleInputChange=(e)=>{
        let type = e.target.id
        let newData = [...this.state.modalData]
        if(type !== 'time' && type !== 'date'){        
            newData[0][type] = e.target.value
            this.setState({
                modalData: newData
            })
        }else{
            let { time, date } = JSON.parse(newData[0].customer_prefer_timeframe);
            time = type === 'time' ? e.target.value : time
            date = type === 'date' ? e.target.value : date
            newData[0].customer_prefer_timeframe = JSON.stringify({date, time})
            this.setState({
                modalData: newData
            })
        }
    }
    render(){
        let { date, time } = this.state.modalData[0].customer_prefer_timeframe ? JSON.parse(this.state.modalData[0].customer_prefer_timeframe): {date:'null', time:'null'}
        console.log(date,time)
        console.log('ticketdata',this.state)
        if(this.state.modalData === "loading"){
            return <div className="ticket-modal">Loading...</div>
        }
        return(
            <div className="ticket-modal">
                <div className="deliveryForm">
                    <div className="form-field"> 
                        <label for="pickup_address1">Address1</label>
                        <input name="pickup_address1" id='pickup_address' value={this.state.modalData[0].pickup_address} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field">
                        <label for="pickup_address2">Address2</label>
                        <input name="pickup_address2" id='pickup_address2' value={this.state.modalData[0].pickup_address2} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field">
                        <label for="date">Date</label>
                        <input name="date" id='date' value={date} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field">                
                        <label for="time" >time</label>
                        <input name="time" id='time' value={time} onChange={this.handleInputChange}/>
                    </div>
                </div>
                
                <button>Submit Quote</button>
            </div>
        )
    }
}

export default TicketModal