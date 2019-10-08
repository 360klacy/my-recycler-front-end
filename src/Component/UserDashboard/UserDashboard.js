import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Item from './../Item/Item'
import './../../App.css';
import UserNavBar from '../NavBar/UserNavBar';
import TicketProp from './TicketProp'
import ItemModal from './ItemModal'
import { subTickets, ticketInfo } from '../../connection/connection';


class UserDashboard extends Component {
    constructor(){
        super();
        this.state = {
            tickets: [],
            showItemModal: true,
            subCatItems: {}
        }
        subTickets((err, ticketInfo)=>this.setState({
            tickets : ticketInfo
        }))
        ticketInfo((err, ticketInfo)=>this.setState({
            tickets : ticketInfo
        }))
    }
    componentDidUpdate(){
        if(this.state.showItemModal === true){
            document.querySelector('body').classList.add('body-show-item-modal')
        }else{
            document.querySelector('body').classList.remove('body-show-item-modal')
        }
    }
    getItems = (items)=>{
        if(items !== this.state.subCatItems){
            this.setState({
                subCatItems: items
            })
        }
        console.log(items)
    }
    showItemModalEvent = (e)=>{
        this.setState({

        })
    }
    render(){
        var tickets = this.state.tickets.map(ticket=><TicketProp progress={ticket.progress} company={ticket.company} detail={ticket.details} />)
        // console.log(tickets);
        var modal = this.state.showItemModal ? <ItemModal items={this.state.subCatItems}/> : ""
        return(<>
            <div className="container">
                {/* <UserNavBar /> */}

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

            <Item getItemfunc={this.getItems}/>
           {modal}
       </> )
    }
}


export default UserDashboard