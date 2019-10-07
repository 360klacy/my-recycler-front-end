import React from 'react';

class TicketProp extends React.Component{
    constructor(){
        super();
        this.state = {

        }

    }
    render(){
        return <h1>{this.props.progress}</h1>
    }
}

export default TicketProp