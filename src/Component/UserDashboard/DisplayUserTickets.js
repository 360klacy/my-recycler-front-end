import React from 'react';
import {subUserTickets,userTicketInfo} from '../../connection/connection'
import axios from 'axios';
import { CLIENT_RENEG_LIMIT } from 'tls';

class DisplayUserTickets extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tickets:[]
    };
  }

  componentDidMount(id,token){
    subUserTickets(this.props.userInfo.id, this.props.userInfo.authToken);
    userTicketInfo((err,ticketInfo)=>{this.setState({
        tickets: ticketInfo
    })})
  }

   acceptDeclinebtn =async (e) =>{
    let userValue 
    
    switch(e.target.value){
      case 'accept':
        userValue = true
        break;
      case 'decline':
        userValue = false
    }
    let url =`${window.apiHost}/ticket/confirm-ticket-quote`
    let axiosResponse = await axios.put(url,{
      userValue,
      token: this.props.userInfo.authToken, 
      userId: this.props.userInfo.id,
      ticketId: this.state.tickets[0].id,
      progress: this.state.tickets[0].progress 

    }
    )
      
    console.log(axiosResponse)
  }

  

  render(){
    console.log('_+_+_+_+_+_+_+_', this.props)
    let ticketInfo = this.state.tickets[0] === undefined ? 
    <div> loading </div>
    : 
    <>
      <div>{this.state.tickets[0].name}</div>
      <div>{this.state.tickets[0].order_items}</div>
      <button onClick={this.acceptDeclinebtn} value="accept">Accept</button>
      <button onClick={this.acceptDeclinebtn} value="decline">Decline</button>
    </>
      // console.log(this.state.tickets)
      // console.log(this.props)
      // let newArr = this.state.tickets.map((ticket, i) => {
      //   return ticket.order_items.split(',').map((ticket) => {
      //     return ticket.split(":")[1]
      //   });
      // })
      // if (newArr.length > 0) {

      // }
    return(<>
      {ticketInfo}
      {/* <h1> {} </h1> */}
    </>)
  }
}
export default DisplayUserTickets;




