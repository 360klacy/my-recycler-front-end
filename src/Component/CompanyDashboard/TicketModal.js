import React from 'react';
import '../../App.css'
import axios from 'axios';

class TicketModal extends React.Component{
    constructor(){
        super();
        this.state = {
            modalData:[0],
            quotes:"",
            formData:[0],
            isMakingChanges: false
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps)
        if(prevProps.ticketData !== this.state.modalData){
            this.setState({
                modalData: prevProps.ticketData,
                formData: prevProps.ticketData
            })
        }
    }
    handleInputChange=(e)=>{
        let type = e.target.id
        let newData = [...this.state.modalData]
        if(this.state.isMakingChanges){ 
            let { time, date } = JSON.parse(newData[0].customer_prefer_timeframe);
            time = type === 'time' ? e.target.value : time
            date = type === 'date' ? e.target.value : date
            newData[0].customer_prefer_timeframe = JSON.stringify({date, time})
            this.setState({
                modalData: newData
            })
        }else{
            if(type === 'quotes'){
                this.setState({
                    quotes: e.target.value
                })
            }
        }
    }

    // handleSubmit(e){
    //     alert("Your quote has been sent $" + this.state.value);
    //     e.preventDefault()
    // }
    /* <button>Submit Quotes</button>
                        <input type="text" value={this.state.value} onChange={this.handleInputChange} /> */
        confirmChangesEvent = ()=>{
            this.setState({
                formData:this.state.modalData,
                isMakingChanges: false
            })
        }
        changeTimeEvent = ()=>{
            this.setState({
                isMakingChanges: true
            })
        }
        submitQuote = async ()=>{
            console.log(this.state.formData[0])
            let { progress, userId, token, pickup_address, pickup_address2, id} = this.state.formData[0]
            const {time, date} = JSON.parse(this.state.formData[0].customer_prefer_timeframe)
            
            const custQuote = {progress, userId, token, time, date, address: pickup_address , address2: pickup_address2, price: this.state.quotes, ticketId: id}
            let axiosResponse = await axios.put(`${window.apiHost}/ticket/add-ticket-quote`, custQuote)
        console.log("dkfjkldjfa", axiosResponse)
        }
        

    render(){
        let { date, time } = this.state.modalData[0].customer_prefer_timeframe ? JSON.parse(this.state.modalData[0].customer_prefer_timeframe): {date:'null', time:'null'}
        let { date:oldDate, time:oldTime } = this.state.formData[0].customer_prefer_timeframe ? JSON.parse(this.state.formData[0].customer_prefer_timeframe): {date:'null', time:'null'}
        console.log(this.state)
        console.log('ticketdata',this.state);
        let filteredItems= [];
        if(this.state.modalData[0].order_items !== undefined){
            console.log(this.state.modalData[0].order_items)
            let orderItemsObject = JSON.parse(this.state.modalData[0].order_items)
        console.log(orderItemsObject)
        const orderItemsArray = Object.entries(orderItemsObject)
        console.log(orderItemsArray)
        filteredItems = orderItemsArray.filter((item)=>{
            return item[1] !== 0
            
        })

        console.log(filteredItems)
        }
        let formDetails = this.state.isMakingChanges ?
        <div className="deliveryForm">
            <div className="form-field"> 
                <div>Address1: {this.state.formData[0].pickup_address}</div>
            </div>
            <div className="form-field">
                <div>Address2: {this.state.formData[0].pickup_address2}</div>
            </div>            
            <h3>Changing Time and Date: </h3>
            <div className="form-field">
                <label htmlFor="date">Date: </label>
                <input name="date" id='date' value={date} onChange={this.handleInputChange}/>
            </div>
            <div className="form-field">                
                <label htmlFor="time" >Time: </label>
                <input name="time" id='time' value={time} onChange={this.handleInputChange}/>
            </div>
           
            <button onClick={this.confirmChangesEvent}> Confirm Changes </button>
        </div> 
        :
        <div className="deliveryForm">
            <div className="form-field"> 
                <div>Address1: {this.state.formData[0].pickup_address}</div>
            </div>
            <div className="form-field">
                <div>Address2: {this.state.formData[0].pickup_address2}</div>
            </div>
            <div className="form-field">
                <div>Date: {oldDate}</div>
            </div>
            <div className="form-field">
                <div>time: {oldTime}</div>
            </div>  
            <button onClick={this.changeTimeEvent}> Make Changes </button>
            <div className="form-field"> 
                <label htmlFor="quotes">Quote</label>
                <input name="quotes" id='quotes' value={this.state.value} onChange={this.handleInputChange} />
            </div>
        </div>
        if(this.state.modalData === "loading"){
            return <div className="ticket-modal">Loading...</div>
        }
        return(
            <div className="ticket-modal">
                <div className="form-top-cont">
                    <button className="close-modal-btn" onClick={this.props.closeModal} id={this.state.formData[0].ticket_id}>X</button> 
                </div>
                <div className="form-left-side">
                    <div className="table-container">
                        <h2>Name: {this.state.formData[0].name} </h2>
                    </div>
                    {formDetails}
                    
                </div>
                <div className="form-right-side">
                    <div className="order-label-cont">
                        <label htmlFor="order_items">Order Details:</label>
                    </div>
                    <div name="order_items" id="order_items" className="modal-order-cont">{
                        filteredItems.map((item)=>{
                        return(<div className="modal-order-item">
                                <div>{item[0]}</div> <div className="border-left">{item[1]}</div>
                            </div>
                )})} </div>
                </div>
                <div className="form-btn-cont">
                    <button onClick={this.submitQuote}>Submit Quote</button>
                </div>
            </div>
        )
    }
}

export default TicketModal