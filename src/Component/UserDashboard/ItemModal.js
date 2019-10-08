import React from 'react';

class ItemModal extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        let formList = this.props;
        return(
            <div>
                <p>{JSON.stringify(this.props.items)}</p>
            </div>
        )
    }
}

export default ItemModal