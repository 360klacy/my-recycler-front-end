import React, { Component } from 'react'
import './../../App.css'


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
            return ticket.progress === 2
        })
        return (<>
            <div className="table-container">
                {filterTicket.map((ticket)=>{ 
                    return <div class="divTableCell">Customer Name: {ticket.name} 
                    <div class="divTableCell">Order: {ticket.id}</div>
                    <div class="divTableCell">Address: {ticket.address}</div>
                    <div class="divTableCell">Time: {ticket.time}</div>
                </div>
                })}
            </div>
            <div className="app-container">

            </div>
            {/* <h1>We have a scheduled pickup/delivery</h1> */}
     </>)
    }
}

export default Scheduled