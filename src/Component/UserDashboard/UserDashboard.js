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
                                <button className="submit-btn">Submit</button>
                            </div>
                    </div>
            </div>

       </> )
    }
}


export default UserDashboard