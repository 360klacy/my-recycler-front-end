import React, { Component } from 'react';
import './CatButtons.css'



class CatButtons extends Component{

    render(){
        // console.log(this.props.quantity)
        return(<>    
            <div key={this.props.kprop} className="category-container">
                <div className='left'><h2>{this.props.button}</h2></div>
                    <div className='right'>
                    <div className="add-minus">

                        <input className="add-button" name={this.props.button} onClick={this.props.fnAdd} type="button" value="+" />
                        <input className="subtract-button" name={this.props.button} onClick={this.props.fnSubtract} type="button" value="-" />
                        {/* <p>{this.props.quantity}</p> */}
                        <input type='text' className='counter' value={this.props.quantity[this.props.button]}/>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default CatButtons