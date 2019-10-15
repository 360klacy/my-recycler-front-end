import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Item from './../Item/Item'
import './../../App.css';
import { Redirect } from "react-router";
import TicketProp from './TicketProp'
import ItemModal from './ItemModal'
import {subUserTickets,userTicketInfo} from '../../connection/connection'
import axios from 'axios'
import DisplayUserTickets from './DisplayUserTickets';
import UserNav from './../NavBar/UserNav'
import UserTabBar from './UserTabBar';
import AllTickets from '../CompanyDashboard/AllTickets';
import PendingQuotes from '../CompanyDashboard/PendingQuotes';
import Scheduled from '../CompanyDashboard/Scheduled';
import AddOrder from './AddOrder';
import PendingOrders from './PendingOrders';







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
            dashDisplayId: 0,
            pickupDate: "",
            address1: "",
            address2: "",
            time: "",
            msg: false,
            showModal: false,
            dashboardContent: null,
            dashDisplayId: 0

        }
            
    }
    isEmpty = function(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
    }

    
    async componentDidMount(){
        console.log('this.ran')
        subUserTickets(this.props.userInfo.id, this.props.userInfo.authToken);
        userTicketInfo((err,ticketInfo)=>{this.setState({
            tickets: ticketInfo
        })})
        if(this.isEmpty(this.state.categories)){
            const catResp = await axios.get(`${window.apiHost}/recycle`);
            // console.log("+++++",catResp.data);
            const preState = {categories:{}}
            catResp.data.forEach((subCategory)=>{
                return preState.categories[subCategory.name]= subCategory.sub_categories
            })
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
                this.setState({
                    subCategoryQuantity: tmpStateObj
                })
            }

        }

        

    addBtn =  (e)=>{
        let newState = Object.assign(this.state.subCategoryQuantity)
        let subCatVal = e.target.name
        newState[subCatVal]++        
        this.setState({
            subCategoryQuantity: newState
        })
    }  
    subtractBtn =  (e)=>{
        let newState = Object.assign(this.state.subCategoryQuantity)
        let subCatVal = e.target.name
        newState[subCatVal]--        
        this.setState({
            subCategoryQuantity: newState
        })
    }  
    getItems = (items)=>{
        if(items !== this.state.subCatItems){
            this.setState({
                subCatItems: items
            })
        }
    }
    showItemModalEvent = (e)=>{
        e.preventDefault()
        this.setState({
            showItemModal:true
        })
    }
    closeModal = (e)=>{
        console.log('closing')
        this.setState({
            showItemModal: false
        })
    }

    changeDate = (e) => {
        this.setState({pickupDate: e.target.value})
    }

    changeAddress1 = (e) => {
        this.setState({address1: e.target.value})
    }

    changeAddress2 = (e) => {
        this.setState({address2: e.target.value})
    }

    changeTime = (e) => {
        this.setState({time: e.target.value})
    }
    handleInputChange = (type, value) => {
        let newObj = {}
        newObj[type] = value
        console.log(value, newObj)
        this.setState(newObj)
    }
    acceptDeclinebtn =async (e) =>{
        let userValue 
        console.log(e.target.id)
        switch(e.target.value){
          case 'accept':
            userValue = true
            break;
          case 'decline':
            userValue = false
        }
        let url =`${window.apiHost}/ticket/confirm-ticket-quote`
        let axiosResponse = await axios.put(url,{
          userValue,
          token: this.props.userInfo.authToken, 
          userId: this.props.userInfo.id,
          ticketId: e.target.id,
          progress: this.state.tickets[0].progress 
    
        }
        )
          
        console.log(axiosResponse)
      }


    submitForm = async (e)=>{
        console.log('I SUBMITTED!')
        this.setState({
            modalLoading: true,
            showItemModal: false,
            showModal: false

        })

        
       
        let payload = JSON.stringify(this.state.subCategoryQuantity)
        let {data : postResp} = await axios.post(`${window.apiHost}/ticket/create-ticket`,{
            token: this.props.userInfo.authToken,
            progress:1,
            payload,
            pickupDate: this.state.pickupDate,
            address1: this.state.address1,
            address2: this.state.address2,
            time: this.state.time,
            userid: this.props.userInfo.id,
        })
        

        console.log(postResp)
        if(postResp.msg === 'success'){
            console.log('SUCCESSSSS')

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
    openModal = (e)=>{
        this.setState({
            showModal:true
        })
    }
    closeModal = (e)=>{
        this.setState({
            showItemModal:false
        })
    }
    changeDashboardContent = (newContent)=>{
        //  console.log(newContent)
        
         let dashDisplayId = 0
         
         if (newContent === 'pending-approvals' || newContent === 1){
            dashDisplayId = 1
            console.log('helllllloo')
         } else if(newContent === 'scheduled-approvals' || newContent === 2 ){
             dashDisplayId = 2
             console.log('helllllllll2222222')
         }
         this.setState({
            dashDisplayId
         },()=>{
            //  console.log("CHANGEDASHBOARDCONTENT: ",this.state.tickets, this.state.dashboardContent)
         })

       }



    render(){
        console.log("0000", this.props.userInfo)

        // var tickets = 
        // var tickets = this.state.tickets.map(ticket=><TicketProp progress={ticket.progress} company={ticket.company} detail={ticket.details} />)
        // console.log(tickets);
        var modal = this.state.showItemModal ? <ItemModal date={this.state.pickupDate} address1={this.state.address1} address2={this.state.address2} time={this.state.time} items={this.state.subCategoryQuantity} closeModal={this.closeModal} submit={this.submitForm} modalLoading={this.state.modalLoading}/> : ""
        let dashboardContent = this.state.tickets.length === 0
            ? ""
            :this.state.dashDisplayId === 0 
            ?<AddOrder handleInputChange={this.handleInputChange} changeDashboardContent={this.changeDashboardContent} userInfo={this.props.userInfo} getItemsFunc={this.getItems} fnAdd={this.addBtn} fnSubtract={this.subtractBtn} categories={this.state.categories} quantity={this.state.subCategoryQuantity} pickupDate={this.state.pickupDate} address1={this.state.address1} address2={this.state.address2} time={this.state.time} showItemModalEvent={this.showItemModalEvent}/>
            :this.state.dashDisplayId === 1
            ? <PendingOrders adFn={this.acceptDeclinebtn} tickets={this.state.tickets} />
            :<Scheduled tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent} />;
         
        
        console.log(dashboardContent,<AddOrder handleInputChange={this.handleInputChange} changeDashboardContent={this.changeDashboardContent} userInfo={this.props.userInfo} getItemsFunc={this.getItems} fnAdd={this.addBtn} fnSubtract={this.subtractBtn} categories={this.state.categories} quantity={this.state.subCategoryQuantity} pickupDate={this.state.pickupDate} address1={this.state.address1} address2={this.state.address2} time={this.state.time} showItemModalEvent={this.showItemModalEvent}/>)

        return(<>
    
            <div className="container">

            <section className="top">
                <div className="container">
                    <h5>Dashboard —</h5>

                        <div className="title">
                            <h1>Hello, {this.props.userInfo.name}.</h1>
            {/* OPEN CREATE NEW QUOTE MODAL */}
              
                           
                        </div>                       
                        
                        <div className="company-dash-cont">

                            <UserTabBar changeDashboardContent={this.changeDashboardContent} displayId={this.state.dashDisplayId}/>/>
                            <div className="user-ticket-cont">
                                {dashboardContent}
                            </div>
                                {/* console.log(this.state.tickets) */}
                        </div>
                </div>
            </section> 
            </div>



            {/* NEW QUOTE FORM BEGIN  */}
             <div className="container" style={this.state.showModal ? {"display": "block"} : {}} >
                 <button className="btn btn-2" onClick={this.closeModal}>x</button>
            
           {modal}
             </div>          
       </> )
       
    }
}


export default UserDashboard