import React from 'react';

class ItemModal extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        let itemList = Object.entries(this.props.items).filter((item)=>item[1]!==0)
        console.log(itemList)
        let formList = this.props;
        if(this.props.modalLoading === true){
            return( <div className="item-confirmation-modal">
                Loading...
            </div>
            )
        }else{

            return(
                <div className="item-confirmation-modal">
                    <div className="modal-logo">
                        <img className="logo-img" src="./012-van.png" alt="logo" />
                    </div>
                    <div className="container">
                        <div className="order-title">
                            <h2>Order Summary</h2>
                            <div className="spacer"></div>
                            <p>Please confirm details below before submitting.</p>
                        </div>
                    
                        <div className="order-details">
                            <ul>{itemList.map((item)=>
                                <li>{`Name: ${item[0]}  Quantity:${item[1]}`}</li>
                            )}</ul>

                            <button className="exit-btn" onClick={this.props.closeModal}>X</button>
                            <button className="request-btn" onClick={this.props.submit}>Request Quote</button>

                        </div>


                    </div>
                </div>
            )
        }
    }
}

export default ItemModal