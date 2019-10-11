import React from 'react';
import '../../App.css'
import axios from 'axios';

class TicketModal extends React.Component{
    constructor(){
        super();
        this.state = {
            modalData:[0],
            quotes:"",
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
        if(type !== 'time' && type !== 'date' && type !== 'quotes'){        
            newData[0][type] = e.target.value
            this.setState({
                modalData: newData
            })
        }else if(type === 'quotes'){
            this.setState({
                quotes: e.target.value
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

    // handleSubmit(e){
    //     alert("Your quote has been sent $" + this.state.value);
    //     e.preventDefault()
    // }
    /* <button>Submit Quotes</button>
                        <input type="text" value={this.state.value} onChange={this.handleInputChange} /> */


        submitQuote = async ()=>{
            console.log(this.state.modalData[0])
            let { progress, userId, token, pickup_address, pickup_address2, id} = this.state.modalData[0]
            const {time, date} = JSON.parse(this.state.modalData[0].customer_prefer_timeframe)
            
            const custQuote = {progress, userId, token, time, date, address: pickup_address , address2: pickup_address2, price: this.state.quotes, ticketId: id}
            let axiosResponse = await axios.put(`${window.apiHost}/ticket/add-ticket-quote`, custQuote)
        console.log("dkfjkldjfa", axiosResponse)
        }
        

    render(){
        let { date, time } = this.state.modalData[0].customer_prefer_timeframe ? JSON.parse(this.state.modalData[0].customer_prefer_timeframe): {date:'null', time:'null'}
        console.log(date,time)
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
        
        if(this.state.modalData === "loading"){
            return <div className="ticket-modal">Loading...</div>
        }
        return(
            <div className="ticket-modal">
                <div className="deliveryForm">
                    <div className="form-field"> 
                        <label for="pickup_address1">Address1: </label>
                        <input name="pickup_address1" id='pickup_address' value={this.state.modalData[0].pickup_address} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field">
                        <label for="pickup_address2">Address2: </label>
                        <input name="pickup_address2" id='pickup_address2' value={this.state.modalData[0].pickup_address2} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field">
                        <label for="date">Date: </label>
                        <input name="date" id='date' value={date} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field">                
                        <label for="time" >Time: </label>
                        <input name="time" id='time' value={time} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field">
                        <label for="price">Price: </label>
                        <input name="price" id="time" value={time} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-field"> 
                        <label for="quotes">Quote</label>
                        <input name="quotes" id='quotes' value={this.state.value} onChange={this.handleInputChange} />
                    </div>
                </div>
                    <div className="table-container">
                        <label for="name">Name:</label>
                        <input name="name" id="name" value={this.state.modalData[0].name} onChange={this.handleInputChange} />
                    </div>
                    <div >
                        <label for="order_items">Order Details:</label>
                        <p name="order_items" id="order_items">{filteredItems.map((item)=>{
                            return(<div>
                                <div>{item[0]}</div> <div>{item[1]}</div>
                            </div>
                        )})} </p>
                    </div>
                    <div className="table-container">
                        <button onClick={this.submitQuote}>Submit Quote</button>
                    </div>
                        

                    
            </div>
        )
    }
}

export default TicketModal