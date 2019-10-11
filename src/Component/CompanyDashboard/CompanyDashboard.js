import React, { Component } from 'react'
import './../../App.css'
import CompanyNavBar from '../NavBar/CompanyNavBar'
import { subTickets, ticketInfo, getTicket, setTicket } from '../../connection/connection';
import { thisTypeAnnotation } from '@babel/types';
import axios from 'axios'
import PendingQuotes from './PendingQuotes'
import PendingApprovals from './PendingApprovals';
import Scheduled from './Scheduled';
import TicketModal from './TicketModal'



class CompanyDashboard extends Component {
        constructor(){
            super();
            this.state = {
                tickets: [],
                showTicketModal: false,
                ticketModalData: [],
                categories:{},
                subCategoryQuantity:{},
                modalLoading: false,
                modalErrorMsg: "",
                requestSent: false,
                dashboardContent: null,
                dashDisplayId: 0
                
            }
            subTickets((err, ticketInfo)=>this.setState({
                tickets : ticketInfo
            }))
            ticketInfo((err, ticketInfo)=>this.setState({
                tickets : ticketInfo
            }))
            setTicket((err, ticketInfo)=>this.setState({
                ticketModalData : ticketInfo
            }))
        }

        componentDidMount(){
            this.setState({
                dashboardContent: <PendingQuotes tickets={this.state.tickets}changeDashboardContent={this.changeDashboardContent}/>
            })
        }
        closeTicketModal = ()=>{
            this.setState({
                showTicketModal: false,
                ticketModalData: []
            })
        }
        findTicket = (id)=>{
            getTicket(id);
            this.setState({
                ticketModalData: "Loading"
            })
        }

        pendingQuotesClickEvent = (e)=>{
            console.log(e.target.id)
        }

         changeDashboardContent = (newContent)=>{
        //  console.log(newContent)
         let dashDisplayId = 0
         let dashboardContent = <PendingQuotes tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent}/>
         if (newContent === 'pending-approvals'){
            dashDisplayId = 1
            dashboardContent = <PendingApprovals tickets={this.state.tickets} setToken={this.props.token} clickFunc={this.pendingQuotesClickEvent} />
         } else if(newContent === 'scheduled-approvals'){
             dashDisplayId = 2
            dashboardContent = <Scheduled tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent} />
         }
         this.setState({
            dashboardContent,
            dashDisplayId
         })
       }


    render(){
        let ticketModal = this.state.showTicketModal ? <TicketModal ticketData={this.state.ticketModalData}/>: ""
        return(<>
        <h5>Dashboard —</h5>
            <div className="title">
                <h1>Hello Company</h1>
            </div>
            <div className="company-dash-cont">
                <CompanyNavBar displayId={this.state.dashDisplayId} changeDashboardContent={this.changeDashboardContent} />
            <div className="comp-ticket-cont">
                {this.state.dashboardContent}
            </div>
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
            {ticketModal}
       </> )
    }
}


export default CompanyDashboard