import React, {Component} from 'react';
import './../../App.css';
import Item from '../Item/Item'
import { thisExpression } from '@babel/types';


class AddOrder extends Component{
    constructor(){
        super()
        this.state = {
            pickupDate: "",
            address1: "",
            address2: "",
            time: ""
        }
    }
    componentDidMount(){
        let {pickupDate, address1, address2, time} = this.props
        this.setState({
            pickupDate,
            address1,
            address2,
            time
        })
    }
    componentDidUpdate(prevProps, prevState){
        let {pickupDate: pickupDatePrev, address1:address1Prev,address2:address2Prev,time:timePrev} = this.props
        let {pickupDate, address1, address2, time} = this.state
        console.log(prevProps)
        if(pickupDatePrev!== pickupDate||address1Prev!==address1|| address2Prev !== address2||timePrev!==time ){
            this.setState({
                pickupDate : pickupDatePrev,
                address1: address1Prev,
                address2:address2Prev,
                time: timePrev
            })
        //     this.setState({
        //         modalData: prevProps.ticketData,
        //         formData: prevProps.ticketData
            } 
    }
    handleInputChange =(e)=>{
        this.props.handleInputChange(e.target.id, e.target.value)
    }
    render(){
        return(<>
            <div className="table-container">
                <Item getItemsFunc={this.props.getItemsFunc}  fnAdd={this.props.fnAdd} fnSubtract={this.props.fnSubtract} categories={this.props.categories} quantity={this.props.quantity}/>
                <div className="wrapper">
                <div>
                    <h1>Time Available for Pick-up</h1>
                </div>
                <form onSubmit={this.submitForm}>
                    <div className="pickup-container">
                            <div className="date-where-time">
                                <div className="box">
                                <h3>Date</h3>
                                <input type="text" value={this.state.pickupDate}  id="pickupDate" onChange={this.handleInputChange} className="input-field" name="input" placeholder="MM-DD-YYYY"  title="Enter a date in this format MM-DD-YYYY" />                    
                                </div>
                                <div className="box">
                                    <h3>Where</h3>
                                    <input type="text" value={this.state.address1} id="address1"onChange={this.handleInputChange} className="input-field" placeholder="Address"  title="Enter a valid address" />                    
                                    <input type="text" value={this.state.address2} id="address2" onChange={this.handleInputChange} className="input-field" placeholder="City/State/Zip Code"  title="Enter a valid city/state/zip" />                    
                                </div>
                                <div className="box">
                                    <h3>Time</h3>
                                    <input type="text" value={this.state.time} id="time" onChange={this.handleInputChange} className="input-field" name="input" placeholder="00:00PM"  title="Enter a time" />                    
                                </div>
                            </div>
                            <div className="box">
                                <button className="btn btn-2" onClick={this.props.showItemModalEvent}>Submit</button>
                            </div>
                    </div>
                </form>
            </div>            
            </div>



        </>)
    }
}

export default AddOrder;