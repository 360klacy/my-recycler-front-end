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
        return (<>
            <div className="table-container">
                {this.props.tickets.map((ticket)=>{ 
                    return <div class="divTableCell">Customer Name: {ticket.name} 
                    <div class="divTableCell">Order: {ticket.id}</div>
                    <div class="divTableCell">Address: {ticket.address}</div>
                    <div class="divTableCell">Time: {ticket.order_items}</div>
                </div>
                })}
            </div>
            <div className="app-container">

            </div>
     </>)
    }
}

export default Scheduled