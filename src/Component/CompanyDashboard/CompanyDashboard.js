import React, { Component } from 'react'
import './../../App.css'
import CompanyNavBar from '../NavBar/CompanyNavBar'
import { subTickets, ticketInfo } from '../../connection/connection';
import { thisTypeAnnotation } from '@babel/types';
import axios from 'axios'
import PendingQuotes from './PendingQuotes'
import PendingApprovals from './PendingApprovals';
import Scheduled from './Scheduled';



class CompanyDashboard extends Component {
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
                dashboardContent: null
    
            }
            // subTickets((err, ticketInfo)=>this.setState({
            //     tickets : ticketInfo
            // }))
            // ticketInfo((err, ticketInfo)=>{
            //     console.log('it did it')
            //     this.setState({
            //     tickets : ticketInfo
            // })})
        }

        componentDidMount(){
            subTickets((err, ticketInfo)=>this.setState({
                tickets : ticketInfo
            }))
            ticketInfo((err, ticketInfo)=>{
                console.log('it did it')
                this.setState({
                tickets : ticketInfo
            },()=> {
                this.changeDashboardContent()
            })})
           
        }

         changeDashboardContent = (newContent)=>{
        //  console.log(newContent)
         let dashboardContent = <PendingQuotes tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent}/>
         if (newContent === 'pending-approvals'){
            dashboardContent = <PendingApprovals tickets={this.state.tickets} setToken={this.props.token}  />
         } else if(newContent === 'scheduled-approvals'){
            dashboardContent = <Scheduled tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent} />
         }
         this.setState({
            dashboardContent
         },
         ()=>{
             console.log("CHANGEDASHBOARDCONTENT: ",this.state.tickets, this.state.dashboardContent)
         }
         )
       }


    render(){
        console.log(this.state.tickets)
        if(this.state.tickets.length === 0){
            console.log('loading')
            return <div>Loadiing</div>
        }else{

        
        return(
            <div className="container">
                <CompanyNavBar changeDashboardContent={this.changeDashboardContent} />

            <section className="top">
                <div className="container">
                    <h5>Dashboard —</h5>

                        <div className="title">
                            <h1>Hello Company</h1>
                        </div>
                </div>
            </section> 
            {this.state.dashboardContent}
            {/* <div className="current-orders">
                <div className="container">
                    <h2>Pending Quotes</h2>
                    <PendingQuotes tickets = {this.state.tickets} />
                </div>
            </div>
            <div className="current-orders">
                <div className="container">
                    <h2>Pending Approvals</h2>
                    <PendingApprovals tickets = {this.state.tickets} />
                </div>
            </div>
            <div className="current-orders">
                <div className="container">
                    <h2>Scheduled</h2>
                    <Scheduled tickets = {this.state.tickets} />
                </div>
            </div> */}
            </div>
    )
    }
    }
}


export default CompanyDashboard