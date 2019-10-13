import React, { Component } from 'react'
import './../../App.css'
import CompanyNavBar from '../NavBar/CompanyNavBar'
import { subTickets, ticketInfo, getTicket, setTicket } from '../../connection/connection';
import { thisTypeAnnotation } from '@babel/types';
import axios from 'axios'
import AllTickets from './AllTickets'
import PendingQuotes from './PendingQuotes';
import Scheduled from './Scheduled';
import TicketModal from './TicketModal'



class CompanyDashboard extends Component {
        constructor(){
            super();
            this.state = {
                tickets: [],
                showTicketModal: false,
                ticketModalData: <TicketModal ticketData={[]}/>,
                categories:{},
                subCategoryQuantity:{},
                modalLoading: false,
                modalErrorMsg: "",
                requestSent: false,
                dashboardContent: null,
                dashDisplayId: 0,
                pendingTickets: {}
                
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
            console.log('component did mount')
            subTickets((err, ticketInfo)=>{
                // console.log('hello?',ticketInfo)
                this.setState({
                dashboardContent: this.state.dashboardContent,
                tickets : ticketInfo
            })})
            ticketInfo((err, ticketInfo)=>{
                // console.log('hello',ticketInfo)
                this.setState({
                tickets : ticketInfo
           },()=> {
                this.changeDashboardContent(this.state.dashDisplayId)
            })})
            setTicket((err, ticketInfo)=>{
                console.log(ticketInfo)
                this.setState({
                ticketModalData : <TicketModal companyUser={this.props.userInfo} ticketData={ticketInfo} closeModal={this.closeTicketModal}/>
            })})
            this.setState({
                dashboardContent: <AllTickets tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent} setToken={this.props.token} clickFunc={this.pendingQuotesClickEvent} pending={this.state.pendingTickets}/>
            })
        }

        closeTicketModal = (e)=>{
            console.log('closing')            
            let id = e.target.id
            this.setState({
                showTicketModal: false,
                ticketModalData: []
            })            

            setTimeout(()=>{            
                console.log(id)

                let newPendingState = Object.assign(this.state.pendingTickets)
                delete newPendingState[id]
                this.setState({
                    pendingTickets:newPendingState,
                    dashboardContent: <PendingQuotes tickets={this.state.tickets} setToken={this.props.token} clickFunc={this.pendingQuotesClickEvent} pending={newPendingState} />
                })
            },10000)
        }
        findTicket = (id)=>{
            getTicket(id);
            let newPendingState = Object.assign(this.state.pendingTickets)
            newPendingState[id] = true
            this.setState({
                ticketModalData: <TicketModal companyUser={this.props.userInfo} ticketData={"loading"} closeModal={this.closeTicketModal}/>,
                showTicketModal: true,
                newPendingState,
                dashboardContent: <PendingQuotes tickets={this.state.tickets} setToken={this.props.token} clickFunc={this.pendingQuotesClickEvent} pending={newPendingState} />
            })
            
        }

        pendingQuotesClickEvent = (e)=>{
            console.log(e.target.id)
            this.findTicket(e.target.id)
        }

         changeDashboardContent = (newContent)=>{
        //  console.log(newContent)
         let dashDisplayId = 0
         let dashboardContent = <AllTickets tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent} setToken={this.props.token} clickFunc={this.pendingQuotesClickEvent} pending={this.state.pendingTickets}/>
         if (newContent === 'pending-approvals' || newContent === 1){
            dashDisplayId = 1
            dashboardContent = <PendingQuotes tickets={this.state.tickets} setToken={this.props.token} clickFunc={this.pendingQuotesClickEvent} pending={this.state.pendingTickets} />
         } else if(newContent === 'scheduled-approvals' || newContent === 2 ){
             dashDisplayId = 2
            dashboardContent = <Scheduled tickets={this.state.tickets} changeDashboardContent={this.changeDashboardContent} />
         }
         this.setState({
            dashboardContent,
            dashDisplayId
         },()=>{
            //  console.log("CHANGEDASHBOARDCONTENT: ",this.state.tickets, this.state.dashboardContent)
         })

       }

       

    render(){
        let ticketModal = this.state.showTicketModal ?this.state.ticketModalData: "";
        return(<>
        <h5>Dashboard —</h5>
            <div className="title">
                <h1>Hello {this.props.userInfo.name}</h1>
            </div>
            <div className="company-dash-cont">
                <CompanyNavBar displayId={this.state.dashDisplayId} changeDashboardContent={this.changeDashboardContent} />
                <div className="comp-ticket-cont">
                    {this.state.dashboardContent}
                </div>
{/* //         console.log(this.state.tickets)
//         if(this.state.tickets.length === 0){
//             console.log('loading')
//             return <div>Loadiing</div>
//         }else{

        
//         return(
//             <div className="container">
//                 <CompanyNavBar changeDashboardContent={this.changeDashboardContent} />

//             <section className="top">
//                 <div className="container">
//                     <h5>Dashboard —</h5>

//                         <div className="title">
//                             <h1>Hello Company</h1>
//                         </div>
//                 </div>
//             </section> 
//             {this.state.dashboardContent}
            {/* <div className="current-orders">
                <div className="container">
                    <h2>Pending Quotes</h2>
                    <AllTickets tickets = {this.state.tickets} />
                </div>
            </div>
            <div className="current-orders">
                <div className="container">
                    <h2>Pending Approvals</h2>
                    <es tickets = {this.state.tickets} />
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