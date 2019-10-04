import React, { Component } from 'react'
import './../Item/Item.css'

class AddMinus extends Component {
    render(){
        return(<>
            <div className="add-minus">
                <input className="add-button" type="button"  value="+" />
                <input className="subtract-button" type="button" value="-" />
            </div>
        </>)
    }
}

export default AddMinus