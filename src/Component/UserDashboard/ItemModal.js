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
                    <ul>{itemList.map((item)=>
                        <li>{`Name: ${item[0]}  Quantity:${item[1]}`}</li>
                    )}</ul>
                    <button onClick={this.props.closeModal} >X</button>
                    <button onClick={this.props.submit}>Submit for a qoute</button>
                </div>
            )
        }
    }
}

export default ItemModal