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
import './UserDashboard.css'



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
            requestSent: false

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
        
    componentDidUpdate(prevProps, prevState){
        if(this.state.showItemModal === true){
            document.querySelector('body').classList.add('body-show-item-modal')
        }else{
            document.querySelector('body').classList.remove('body-show-item-modal')
        }
        console.log('prevstate',prevState)
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

    submitForm = async (e)=>{
        this.setState({
            modalLoading: true
        })
        let payload = JSON.stringify(this.state.subCategoryQuantity)
        let postResp = await axios.post(`${window.apiHost}/ticket/create-ticket`,{
            token: '321',
            progress:0,
            payload,
            userid: '1'
        })

        if(postResp.msg === 'success'){
            this.setState({
                requestSent:true
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
        var modal = this.state.showItemModal ? <ItemModal items={this.state.subCategoryQuantity} closeModal={this.closeModal} submit={this.submitForm} modalLoading={this.state.modalLoading}/> : ""
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
                            <h1>Hello User!</h1>
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
                <div className="pickup-container">
                        <div className="date-where-time">
                            <div className="box">
                            <h3>Date</h3>
                            <input type="text" className="input-field" name="input" placeholder="MM-DD-YYYY"  title="Enter a date in this format MM-DD-YYYY" />                    
                            </div>
                            <div className="box">
                                <h3>Where</h3>
                                <input type="text" className="input-field" placeholder="Address"  title="Enter a valid address" />                    
                                <input type="text" className="input-field" placeholder="City/State/Zip Code"  title="Enter a valid city/state/zip" />                    
                            </div>
                            <div className="box">
                                <h3>Time</h3>
                                <input type="text" className="input-field" name="input" placeholder="00:00PM"  title="Enter a time" />                    
                            </div>
                        </div>
                            <div className="box">
                                <button className="submit-btn" onClick={this.showItemModalEvent}>Submit</button>
                            </div>
                    </div>
            </div>

            {/* <Item getItemsFunc={this.getItems}/> */}
           {modal}
       </> )
    }
}


export default UserDashboard