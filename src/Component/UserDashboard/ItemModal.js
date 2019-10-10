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
                        <div className="order-details">
                            <h2>Order Summary</h2>
                            <div className="spacer"></div>
                            <p>Please confirm details below before submitting.</p>
                        </div>
                    
                        <div className="order-details">
                            <div className="list">
                                <ul>
                                    <li>Date: {this.props.date}</li>  <br />
                                    <li>Address: {this.props.address1}</li> <br />
                                    <li>City/State/Zip: {this.props.address2}</li> <br />
                                    <li>Requested Time: {this.props.time}</li> <br />
                                </ul>
                            </div>
                                <div className="spacer"></div>
                            
                            <div className="list">
                                <ul>{itemList.map((item)=>
                                   <> 
                                    <li>{`${item[0]}`} </li> <br />
                                    <li>{`Quantity:${item[1]}`}</li> 
                                    <div className="spacer"></div>
                                   </>
                                )}
                                
                                </ul> 
                                

                            </div>
                        </div>

                        <div className="order-details">
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