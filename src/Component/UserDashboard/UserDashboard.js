import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Item from './../Item/Item'
import './../../App.css';
import { Redirect } from "react-router";
import UserNavBar from '../NavBar/UserNavBar';
import TicketProp from './TicketProp'
import ItemModal from './ItemModal'
import { subTickets, ticketInfo } from '../../connection/connection';
import { thisTypeAnnotation } from '@babel/types';
import axios from 'axios'
import Status from './Status'

class UserDashboard extends Component {
    constructor(){
        super();
        this.state = {
            tickets: [],
            showItemModal: false,
            categories:{},
            subCategoryQuantity:{},
            modalLoading: false,
            modalErrorMsg: "",
            requestSent: false,
            pickupDate: "",
            address1: "",
            address2: "",
            time: "",
            msg: false

        }
        // subTickets((err, ticketInfo)=>this.setState({
        //     tickets : ticketInfo
        // }))
        // ticketInfo((err, ticketInfo)=>this.setState({
        //     tickets : ticketInfo
        // }))
    }
    isEmpty = function(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
    }

    
    async componentDidMount(){
        if(this.isEmpty(this.state.categories)){
            console.log('finding categories')
            const catResp = await axios.get(`${window.apiHost}/recycle`);
            // console.log("+++++",catResp.data);
            const preState = {categories:{}}
            catResp.data.forEach((subCategory)=>{
                return preState.categories[subCategory.name]= subCategory.sub_categories
            })
            console.log(preState)
            this.setState({
                categories: preState
            })
        }
        if(this.isEmpty(this.state.subCategoryQuantity)){
            console.log('setting quantities')
                let tmpStateObj = Object.assign({})
                Object.keys(this.state.categories.categories).forEach((category,i)=>{
                    //   console.log(category)
                    this.state.categories.categories[category].forEach((subCategory,j)=>{
                        tmpStateObj[subCategory.name] = 0
                    })
                    // console.log(newRows)
                    })
                console.log(this.state)
                this.setState({
                    subCategoryQuantity: tmpStateObj
                })
            }

        }

        

    addBtn =  (e)=>{
        let newState = Object.assign(this.state.subCategoryQuantity)
        let subCatVal = e.target.name
        console.log(newState)
        newState[subCatVal]++        
        this.setState({
            subCategoryQuantity: newState
        })
    }  
    subtractBtn =  (e)=>{
        let newState = Object.assign(this.state.subCategoryQuantity)
        let subCatVal = e.target.name
        console.log(newState)
        newState[subCatVal]--        
        this.setState({
            subCategoryQuantity: newState
        })
    }  
    getItems = (items)=>{
        console.log(items)
        if(items !== this.state.subCatItems){
            this.setState({
                subCatItems: items
            })
        }
        console.log(items)
    }
    showItemModalEvent = (e)=>{
        this.setState({
            showItemModal:true
        })
    }
    closeModal = (e)=>{
        this.setState({
            showItemModal: false
        })
    }

    changeDate = (e) => {
        console.log(e.target.value)
        this.setState({pickupDate: e.target.value})
    }

    changeAddress1 = (e) => {
        console.log(e.target.value)
        this.setState({address1: e.target.value})
    }

    changeAddress2 = (e) => {
        console.log(e.target.value)
        this.setState({address2: e.target.value})
    }

    changeTime = (e) => {
        console.log(e.target.value)
        this.setState({time: e.target.value})
    }



    submitForm = async (e)=>{
        e.preventDefault()
        console.log('I SUBMITTED!')
        this.setState({
            modalLoading: true
        })

        
       
        let payload = JSON.stringify(this.state.subCategoryQuantity)
        let {data : postResp} = await axios.post(`${window.apiHost}/ticket/create-ticket`,{
            token: '321',
            progress:0,
            payload,
            pickupDate: this.state.pickupDate,
            address1: this.state.address1,
            address2: this.state.address2,
            time: this.state.time,
            userid: '1'
        })
        

        if(postResp.msg === 'success'){
            console.log('SUCCESSSSS')
            this.thankYouMsg(e)

            this.setState({
                requestSent:true,
            })

        }else{
            this.setState({
                modalLoading: false,
                modalErrorMsg: postResp.msg
            })
        }

    
    }
    render(){

        console.log(this.state.subCategoryQuantity)
        var showItems = this.isEmpty(this.state.categories) || this.isEmpty(this.state.subCategoryQuantity) ? "" :  <Item getItemsFunc={this.getItems} fnAdd={this.addBtn} fnSubtract={this.subtractBtn} categories={this.state.categories} quantity={this.state.subCategoryQuantity}/>

        var tickets = this.state.tickets.map(ticket=><TicketProp progress={ticket.progress} company={ticket.company} detail={ticket.details} />)
        // console.log(tickets);
        var modal = this.state.showItemModal ? <ItemModal date={this.state.pickupDate} address1={this.state.address1} address2={this.state.address2} time={this.state.time} items={this.state.subCategoryQuantity} closeModal={this.closeModal} submit={this.submitForm} modalLoading={this.state.modalLoading}/> : ""
        if(this.state.requestSent){
            return(<Redirect to="/"/>)
        }
        return(<>
            <div className="container">
                {/* <UserNavBar /> */}

            <section className="top">
                <div className="container">
                    <h5>Dashboard —</h5>

                        <div className="title">
                            <h1>Hello, {this.props.userInfo.name}.</h1>
                        </div>
                        {/* <div className="ticket-cont"> 
                            {tickets}
                      </div> */}
                </div>
            </section> 
            </div>

            {showItems}

            <div className="wrapper">
                <div>
                    <h1>Time Available for Pick-up</h1>
                </div>
                <form onSubmit={this.submitForm}>
                    <div className="pickup-container">
                            <div className="date-where-time">
                                <div className="box">
                                <h3>Date</h3>
                                <input type="text" value={this.state.pickupDate}  onChange={this.changeDate} className="input-field" name="input" placeholder="MM-DD-YYYY"  title="Enter a date in this format MM-DD-YYYY" />                    
                                </div>
                                <div className="box">
                                    <h3>Where</h3>
                                    <input type="text" value={this.state.address1} onChange={this.changeAddress1} className="input-field" placeholder="Address"  title="Enter a valid address" />                    
                                    <input type="text" value={this.state.address2} onChange={this.changeAddress2} className="input-field" placeholder="City/State/Zip Code"  title="Enter a valid city/state/zip" />                    
                                </div>
                                <div className="box">
                                    <h3>Time</h3>
                                    <input type="text" value={this.state.time} onChange={this.changeTime} className="input-field" name="input" placeholder="00:00PM"  title="Enter a time" />                    
                                </div>
                            </div>
                            <div className="box">
                                <button className="submit-btn" onClick={this.showItemModalEvent}>Submit</button>
                            </div>
                    </div>
                </form>
            </div>

            {/* <Item getItemsFunc={this.getItems}/> */}
           {modal}
           {<Status />}
       </> )
       
    }
}


export default UserDashboard