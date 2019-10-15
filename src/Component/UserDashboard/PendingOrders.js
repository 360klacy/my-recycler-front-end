import React, {Component} from 'react';
import './../../App.css';


class PendingOrders extends Component{
    render(){
        return(<>
            <div className="user-order">
                {this.state.tickets}
            </div>
        </>)
    }
}

export default PendingOrders;