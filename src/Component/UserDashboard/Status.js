import React, { Component } from 'react'



class Status extends Component {
    render(){
        return(<>
                <div className="container">
                    <h1>View Order Status</h1>
                </div>
                <div className="table-container">
                    <div className="divTableCell">Order: </div>
                    <div className="divTableCell">Address: </div>
                    <div className="divTableCell">Time: </div>
                    <div className="divTableCell">Status: </div>
                </div>
    </> )
    }
}


export default Status