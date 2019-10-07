import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Item from './../Item/Item'
import './../../App.css';
import UserNavBar from '../NavBar/UserNavBar';
import TicketProp from './TicketProp'
import { subTickets, ticketInfo } from '../../connection/connection';


class UserDashboard extends Component {
    constructor(){
        super();
        this.state = {
            tickets: []
        }
        subTickets((err, ticketInfo)=>this.setState({
            tickets : ticketInfo
        }))
        ticketInfo((err, ticketInfo)=>this.setState({
            tickets : ticketInfo
        }))
    }

    
    render(){
        var tickets = this.state.tickets.map(ticket=><TicketProp progress={ticket.progress} company={ticket.company} detail={ticket.details} />)
        console.log(tickets)
        return(<>
            <div className="container">
                <UserNavBar />

            <section className="top">
                <div className="container">
                    <h5>Dashboard —</h5>

                        <div className="title">
                            <h1>Hello User!</h1>
                        </div>
                        <div className="ticket-cont"> 
                            {tickets}
                      </div>
                </div>
            </section> 
            </div>

            <Item />
       </> )
    }
}


export default UserDashboard