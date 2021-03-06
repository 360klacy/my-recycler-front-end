
import React, { Component } from 'react'
import './../../App.css';
import ScheduledTicket from './ticketStructure/ScheduledTicket'


class Scheduled extends Component {

    // changeModalContent = (newContent)=>{
    //     //  console.log(newContent)
    //      let modalContent = <ModalDefault changeModalContent={this.changeModalContent}/>
    //      if (newContent === 'login'){
    //        modalContent = <Login setToken={this.props.token} changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
    //      } else if(newContent === 'signup'){
    //        modalContent = <Signup setToken={this.props.setToken} changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
    //      }
    //      this.setState({
    //        modalContent
    //      })
    //    }

    render() {
        console.log(this.props.tickets)
        const filterTicket = this.props.tickets.filter((ticket)=>{
            return ticket.progress >= 3
        })
        return (<>
            <div className="table-container">
                {filterTicket.map((ticket)=>{ 
                    return <ScheduledTicket ticket={ticket}/>
                })}
            </div>
            <div className="app-container">

            </div>
            {/* <h1>We have a scheduled pickup/delivery</h1> */}
     </>)
    }
}

export default Scheduled