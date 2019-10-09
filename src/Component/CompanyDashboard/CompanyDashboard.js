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
            subTickets((err, ticketInfo)=>this.setState({
                tickets : ticketInfo
            }))
            ticketInfo((err, ticketInfo)=>this.setState({
                tickets : ticketInfo
            }))
        }

        componentDidMount(){
            this.setState({
                dashboardContent: <PendingQuotes changeDashboardContent={this.changeDashboardContent}/>
            })
        }

         changeDashboardContent = (newContent)=>{
        //  console.log(newContent)
         let dashboardContent = <PendingQuotes changeDashboardContent={this.changeDashboardContent}/>
         if (newContent === 'pending-approvals'){
            dashboardContent = <PendingApprovals setToken={this.props.token}  />
         } else if(newContent === 'scheduled-approvals'){
            dashboardContent = <Scheduled changeDashboardContent={this.changeDashboardContent} />
         }
         this.setState({
            dashboardContent
         })
       }


    render(){
        return(<>
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
       </> )
    }
}


export default CompanyDashboard