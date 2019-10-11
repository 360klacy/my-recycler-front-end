import React from 'react';
import {subUserTickets,userTicketInfo} from '../../connection/connection'
import { ticketInfo } from '../../connection/connection';

class DisplayUserTickets extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tickets:[]
    };
  }

  componentDidMount(id,token){
    subUserTickets(this.props.userInfo.id, this.props.userInfo.token);
    userTicketInfo((err,ticketInfo)=>this.setState({
        tickets: ticketInfo
    }))
  }



  render(){
      console.log(this.state.tickets)
      console.log(this.props)
    return(<>
      <h1> Hello world. </h1>
    </>)
  }
}
export default DisplayUserTickets;




